const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitEmailBtn = document.getElementById("contact-submit-button");

submitEmailBtn.addEventListener("click", sendEmail);
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: email.value,
      Password: "Enter your password",
      To: 'jiancaballero@gmail.com',
      From: email.value,
      Subject: subject.value,
      Body: message.value,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }
