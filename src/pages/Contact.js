import React, { useState } from "react";
import { send } from "emailjs-com";
const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const getInput = (e) => {
    switch (e.target.name) {
      case "name":
        setInput({ ...input, name: e.target.value });
        break;
      case "email":
        setInput({ ...input, email: e.target.value });
        break;
      case "subject":
        setInput({ ...input, subject: e.target.value });
        break;
      case "message":
        setInput({ ...input, message: e.target.value });
        break;
    }
  };
  const submitContact = (e) => {
    e.preventDefault();

    if (input.name==="" || input.email === "" || input.subject === "" || input.message === "") {
      alert("Please fill out all fields. Thank you!");
    } else {
      send("service_1n258ly", "template_wxd4utr", input, "xUijgwSRVRNo8yCk-")
        .then((response) => {
          console.log("SUCCESS", response.status, response.text);
          alert(
            "Thank you for reaching out to me. I will get back to you once I receive your email."
          );
        })
        .catch((error) => {
          console.log(error);
          alert("An error had occured while sending the email");
        });
    }
  };
  return (
    <section id="contact">
      <div class="container contact-container">
        <div class="contact-top flex-container">
          <div class="get-in-touch">
            <h1>Get in touch</h1>
            <h2>Feel free to message me for any inquiries</h2>
          </div>
          <div class="jc-avatar">
            <img src={require("../assets/images/jc-bitmoji.jpeg")} alt="" />
            <small>Hey, what's up?</small>
          </div>
        </div>
        <div class="contact-bottom flex-container">
          <div class="contact-bottom-left">
            <div class="location-contact flex-container">
              <i class="fa-solid fa-location-dot"></i>
              <h2>Manila, PH</h2>
            </div>
            <div class="phone-contact flex-container">
              <i class="fa-solid fa-phone"></i>
              <h2>+63 945 261 9775 (Viber)</h2>
            </div>
            <div class="email-contact flex-container">
              <i class="fa-solid fa-envelope"></i>
              <h2>jiancaballero@gmail.com</h2>
            </div>
          </div>
          <div class="contact-bottom-right flex-container">
            <div class="contact-input">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                class="name"
                placeholder="Please input your name"
                onChange={getInput}
                value={input.name}
              />
            </div>
            <div class="contact-input">
              <label for="name">Email</label>
              <input
                type="text"
                name="email"
                class="name"
                placeholder="Please input your email address"
                onChange={getInput}
                value={input.email}
              />
            </div>
            <div class="contact-input">
              <label for="email">Subject</label>
              <input
                type="text"
                name="subject"
                class="name"
                placeholder="Please input a subject"
                onChange={getInput}
                value={input.subject}
              />
            </div>
            <div class="contact-input">
              <label for="name">Message</label>
              <textarea
                name="message"
                class="message"
                rows="10"
                placeholder="Please input your message"
                onChange={getInput}
                value={input.message}
              ></textarea>
            </div>
            <div class="contact-submit flex-container">
              <button class="contact-submit-button" onClick={submitContact}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
