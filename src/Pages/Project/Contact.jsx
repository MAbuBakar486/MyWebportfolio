import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";

const primaryOrange = "#F05A28";
const primaryGreen = "#7dd329";

const ContactContainer = styled.section`
  padding: 6rem 0;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  color: var(--text-color);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${primaryOrange};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;

  &::before, &::after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: ${primaryOrange};
  }
`;

const MainHeading = styled.h2`
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);

  .orange-text {
    color: ${primaryOrange};
    display: block;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 450px;
`;

const ValueSection = styled.div`
  margin-bottom: 3.5rem;

  h4 {
    font-size: 1.35rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: 'Inter', sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.5;

    svg {
      color: ${primaryGreen};
      margin-top: 5px;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .icon-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${primaryGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #111;
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    color: var(--text-color);
  }

  p {
    color: var(--text-muted);
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const RightSide = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid var(--card-border);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 12px;
  padding: 16px 20px;
  color: var(--input-text);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${primaryOrange};
    box-shadow: 0 0 10px rgba(240, 90, 40, 0.1);
  }

  &::placeholder {
    color: var(--input-placeholder);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 12px;
  padding: 16px 20px;
  color: var(--input-text);
  font-size: 1rem;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239aa3ae' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 15px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${primaryOrange};
  }
  
  option {
    background: var(--card-bg);
    color: var(--text-color);
  }
  
  &.placeholder-selected {
    color: var(--input-placeholder);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 12px;
  padding: 16px 20px;
  color: var(--input-text);
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${primaryOrange};
    box-shadow: 0 0 10px rgba(240, 90, 40, 0.1);
  }

  &::placeholder {
    color: var(--input-placeholder);
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 18px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(90deg, #A855F7 0%, ${primaryOrange} 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  text-align: center;
  color: ${props => props.isError ? '#ff4d4d' : primaryGreen};
  font-size: 0.95rem;
`;

const ErrorText = styled.span`
  color: #ff4d4d;
  font-size: 0.85rem;
  margin-top: 6px;
  display: block;
`;

// Top overarching header shown in user's image above left side
const OverarchingHeader = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  span {
    color: #A855F7; /* Using purple/pink gradient color roughly matching "Me" */
    background: -webkit-linear-gradient(0deg, #A855F7, ${primaryOrange});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Contact = () => {
  const [result, setResult] = useState("");
  const [emailError, setEmailError] = useState("");
  const [service, setService] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    setResult("Sending Your Query...");
    formData.append("access_key", "5b0b91d2-06e5-479b-8fd7-3c67ff097252");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Query Submitted Successfully");
      event.target.reset();
      setService("");
    } else {
      console.log("Error", data);
      setResult(data.message || "An error occurred.");
    }
  };

  return (
    <ContactContainer id="Contact">
      <Slide direction="down" triggerOnce>
        <OverarchingHeader>Contact <span>Me</span></OverarchingHeader>
      </Slide>

      <ContentGrid>
        <Slide direction="left" triggerOnce>
          <LeftSide>
            <SubHeading>CONTACT US</SubHeading>
            <MainHeading>
              Get In Touch
              <span className="orange-text">With Me.</span>
            </MainHeading>
            <Description>
              Have a project or question? Feel free to reach out anytime here directly.
            </Description>

            <ValueSection>
              <h4>The Value of Our Consultation Service</h4>
              <ul>
                <li><FaCheck /> Smart Marketing Planning for Better Brand Results</li>
                <li><FaCheck /> Deep Evaluation of Your Design and Campaign Needs</li>
                <li><FaCheck /> Expert Solutions for Every Marketing and Design Challenge</li>
                <li><FaCheck /> 24/7 Help and Reliable Ongoing Digital Support</li>
              </ul>
            </ValueSection>

            <ContactInfoGrid>
              <InfoBox>
                <div className="icon-wrapper"><FaMapMarkerAlt /></div>
                <h5>Our Address</h5>
                <p>Lahore, PK<br />Phone : +923037778240</p>
              </InfoBox>
              <InfoBox>
                <div className="icon-wrapper"><FaPhoneAlt /></div>
                <h5>Connect With Me</h5>
                <p>Email :<br />dev.hafizbakar020@gmail.com</p>
              </InfoBox>
            </ContactInfoGrid>
          </LeftSide>
        </Slide>

        <Slide direction="right" triggerOnce>
          <RightSide>
            <Form onSubmit={onSubmit}>
              <InputGroup>
                <StyledInput placeholder="Your Name" name="name" required />
              </InputGroup>

              <InputGroup>
                <StyledInput
                  placeholder="Your Email"
                  name="email"
                  required
                  onChange={(e) => setEmailError(validateEmail(e.target.value) ? "" : "Please enter a valid email address.")}
                />
                {emailError && <ErrorText>{emailError}</ErrorText>}
              </InputGroup>

              <InputGroup>
                <StyledSelect
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className={service === "" ? "placeholder-selected" : ""}
                >
                  <option value="" disabled hidden>Select a Service</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="App Prototyping">App Prototyping</option>
                  <option value="Other">Other</option>
                </StyledSelect>
              </InputGroup>

              <InputGroup>
                <StyledInput placeholder="Subject" name="subject" required />
              </InputGroup>

              <InputGroup>
                <StyledTextarea placeholder="Your Message" name="message" required></StyledTextarea>
              </InputGroup>

              <SubmitBtn type="submit">
                Send Message <FiSend />
              </SubmitBtn>

              {result && (
                <StatusMessage isError={emailError || result.includes("Error")}>
                  {result}
                </StatusMessage>
              )}
            </Form>
          </RightSide>
        </Slide>
      </ContentGrid>
    </ContactContainer>
  );
};

export default Contact;