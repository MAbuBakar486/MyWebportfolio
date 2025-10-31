import React, { useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const Email = () => {
const [result, setResult] = useState("");
const [emailError, setEmailError] = useState("");

const validateEmail = (email) => {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
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
} else {
console.log("Error", data);
setResult(data.message);
}
};

return (
<div className="sc-gSAPjG EHNsp" id="Contact" > 
    <div className="sc-lbxAil bEDFbS">
        <Zoom direction="top">
            <div className="sc-iNWwEs dueNOl" style={{fontFamily:"tiempos,serif"}}>Contact Me</div>
            <div className="sc-jfmDQi fIDHyg">Feel free to reach out to me for any questions or opportunities!</div>
        </Zoom>

        <form className="sc-eKszNL bngZdt" onSubmit={onSubmit}>
            <div className="sc-olbas bFLFZT">Email Me 🚀</div>
            <input placeholder="Enter Your Email" name="email" required className="sc-hiMGwR hYtKIX" onChange={(e)=> {
            setEmailError(validateEmail(e.target.value) ? "" : "Please enter a valid email address.");
            }}
            />
            {emailError && <p className="error">{emailError}</p>}
            <input placeholder="Subject" name="subject" required className="sc-hiMGwR hYtKIX" />
            <textarea placeholder="Message" rows="4" required name="message" className="dAzLIn"></textarea>
            <input type="submit" className="sc-lbOyJj efxqxg" value="Send" />
            <span className="queryinfo">{result}</span>
        </form>
    </div>
</div>
);
};

export default Email;