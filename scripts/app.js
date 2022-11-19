const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitEmailBtn = document.getElementById("contact-submit-button");
require("dotenv").config();
submitEmailBtn.addEventListener("click", send);

// IMPORT NODEMAILER
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  }
});


async function send() {
  const result = await transporter.sendMail({
      from: email.value,
      to: process.env.EMAIL,
      subject: subject.value,
      text: message.value
  });

  console.log(JSON.stringify(result, null, 4));
}
