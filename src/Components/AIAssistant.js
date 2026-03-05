import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { BsRobot, BsSend, BsXLg, BsPlusLg, BsMic, BsSoundwave } from "react-icons/bs";
import axios from 'axios';

const WEBHOOK_URL = "https://n8n.sovanza.net/webhook/chatbot";
const STORAGE_KEY = "portfolio_chat_session";
const EXPIRY_TIME = 12 * 60 * 60 * 1000; // 12 hours

const blurIn = keyframes`
  from { backdrop-filter: blur(0px); background: rgba(0,0,0,0); }
  to { backdrop-filter: blur(15px); background: rgba(0,0,0,0.75); }
`;

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const GlobalBlur = createGlobalStyle`
  body.assistant-open {
    overflow: hidden;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${blurIn} 0.4s forwards;
  padding: 40px 20px;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  background: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: ${slideUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--card-border);

  margin: auto;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(240, 90, 40, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 992px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    max-height: 95vh;
  }
`;

const Header = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--card-border);
  flex-shrink: 0;
`;

// ... keep UserInfo, CloseButton ...

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    color: var(--text-color);
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: var(--card-border);
  border: 1px solid var(--card-border);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--card-border);
    opacity: 0.7;
    transform: rotate(90deg);
  }
`;

const ChatBody = styled.div`
  padding: 16px 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: thin;
  scrollbar-color: var(--card-border) transparent;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: var(--card-border); border-radius: 10px; }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  max-width: 80%;

  .content {
    background: ${props => props.isUser ? 'linear-gradient(135deg, #F05A28, #A855F7)' : 'var(--bg-color)'};
    color: ${props => props.isUser ? '#fff' : 'var(--text-color)'};
    padding: 12px 16px;
    border-radius: ${props => props.isUser ? '16px 16px 2px 16px' : '16px 16px 16px 2px'};
    font-size: 0.95rem;
    line-height: 1.5;
    border: 1px solid var(--card-border);
    white-space: pre-wrap; /* Preserve formatting from assistant */
  }

  .time {
    font-size: 0.7rem;
    color: var(--text-muted);
    align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  }
`;

const InputWrapper = styled.div`
  padding: 12px 20px;
  background: var(--card-bg);
  border-top: 1px solid var(--card-border);
  flex-shrink: 0;

  .input-container {
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 12px;
    padding: 6px 12px;
    display: flex;
    align-items: center; /* Single line alignment */
    gap: 10px;
    transition: all 0.3s;

    &:focus-within {
      border-color: #F05A28;
      box-shadow: 0 0 0 2px rgba(240, 90, 40, 0.1);
    }
  }

  textarea {
    background: transparent;
    border: none;
    color: var(--text-color);
    font-size: 0.95rem;
    resize: none;
    outline: none;
    flex: 1;
    min-height: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    padding-top: 6px;
    font-family: inherit;

    &::placeholder { color: var(--text-muted); opacity: 0.6; }
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-actions, .right-actions {
    display: flex;
    gap: 8px;
  }
`;

const ActionIcon = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 42px;
  height: 42px;
  border-radius: 12px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const TalkBtn = styled.button`
  background: #F05A28;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0 20px;
  height: 42px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ff6b3d;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg { font-size: 1.2rem; }
`;

const QuickChips = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Chip = styled.button`
  background: var(--bg-color);
  border: 1px solid var(--card-border);
  padding: 6px 12px;
  border-radius: 50px;
  color: var(--text-muted);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(240, 90, 40, 0.05);
    border-color: #F05A28;
    color: #F05A28;
  }
`;

const typingAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 10px;
  span {
    width: 6px;
    height: 6px;
    background: #F05A28;
    border-radius: 50%;
    animation: ${typingAnimation} 1s infinite;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const AIAssistant = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    // Load session from storage
    const savedSession = localStorage.getItem(STORAGE_KEY);
    if (savedSession) {
      try {
        const { timestamp, chatMessages } = JSON.parse(savedSession);
        const now = new Date().getTime();
        if (now - timestamp < EXPIRY_TIME) {
          setMessages(chatMessages);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        timestamp: new Date().getTime(),
        chatMessages: messages
      }));
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('assistant-open');
    } else {
      document.body.classList.remove('assistant-open');
    }
  }, [isOpen]);

  const handleSend = async (msgText) => {
    const textToSend = msgText || input;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(WEBHOOK_URL, {
        message: textToSend,
        userId: "user_" + (localStorage.getItem("portfolio_user_id") || "anonymous")
      });

      console.log("Webhook Response:", response.data);

      // Enhanced Response Parsing for common N8N array structures
      let botResponseText = "I'm here to help!";

      const resData = response.data;
      if (Array.isArray(resData) && resData.length > 0) {
        botResponseText = resData[0].answer || resData[0].response || resData[0].output || resData[0].text || botResponseText;
      } else if (typeof resData === 'object' && resData !== null) {
        botResponseText = resData.answer || resData.response || resData.output || resData.message || botResponseText;
        if (typeof resData === 'string') botResponseText = resData;
      }

      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now.",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <GlobalBlur />
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Header>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center', width: '100%' }}>
            <div style={{ color: '#F05A28', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
              <div style={{ background: '#F05A28', padding: '6px', borderRadius: '10px', color: '#fff' }}>
                <BsRobot />
              </div>
            </div>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '2px' }}>Welcome back!</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8, fontSize: '0.8rem' }}>
              Ask me anything.
            </p>
          </div>
          <CloseButton onClick={onClose} style={{ position: 'absolute', top: '24px', right: '32px' }}>
            <BsXLg />
          </CloseButton>
        </Header>

        <ChatBody ref={scrollRef}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', color: '#444', marginTop: '20px' }}>
              <BsRobot size={48} style={{ marginBottom: '12px', opacity: 0.3 }} />
              <p>Start a conversation with my AI assistant.</p>
            </div>
          )}
          {messages.map(msg => (
            <Message key={msg.id} isUser={msg.isUser}>
              <div className="content">{msg.text}</div>
              <div className="time">{msg.time}</div>
            </Message>
          ))}
          {isTyping && (
            <Message isUser={false}>
              <div className="content">
                <TypingIndicator>
                  <span /><span /><span />
                </TypingIndicator>
              </div>
            </Message>
          )}
        </ChatBody>

        <InputWrapper>
          <div className="input-container">
            <textarea
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <TalkBtn onClick={() => handleSend()} disabled={isTyping || !input.trim()} style={{ width: '40px', padding: 0, justifyContent: 'center' }}>
              <BsSend />
            </TalkBtn>
          </div>

          <QuickChips style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip onClick={() => handleSend("Who is Hafiz Abu Bakar?")}>
              Who are you?
            </Chip>

            <Chip onClick={() => handleSend("What technologies do you work with?")}>
              Your technology stack
            </Chip>

            <Chip onClick={() => handleSend("Show me your Flutter projects")}>
              All Flutter projects
            </Chip>

            <Chip onClick={() => handleSend("Do you build full stack web apps?")}>
              Working on Web development projects
            </Chip>

            <Chip onClick={() => handleSend("Do you create automation workflows with n8n or RPA?")}>
              Automation & AI
            </Chip>

            <Chip onClick={() => handleSend("Can I hire you for a project?")}>
              Hire you
            </Chip>

            <Chip onClick={() => handleSend("How can I contact you?")}>
              Contact me
            </Chip>

            <Chip onClick={() => handleSend("Show your GitHub projects")}>
              GitHub Link
            </Chip>

            <Chip onClick={() => handleSend("Schedule a meeting with you")}>
              Can we Scheduled call ?
            </Chip>
          </QuickChips>
        </InputWrapper>
      </ModalContainer>
    </Backdrop>
  );
};

export default AIAssistant;
