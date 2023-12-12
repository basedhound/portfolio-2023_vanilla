/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  console.log(sendEmail);
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm("service_xoa2uta", "template_ehkz8nv", "#contact-form", "")
    .then(() => {
      // Show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after 5 seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    });
};

contactForm.addEventListener("submit", sendEmail);
