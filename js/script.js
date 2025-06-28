function sendEmail(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    showMessage("Please fill out all fields.", "error");
    return;
  }

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  let params = {
    name: name,
    email: email,
    message: message,
    subject: "message from- " + name,
  };
  emailjs.send("service_h0r6s0i", "template_ayrnydh", params).then(
    (response) => {
      showMessage(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
      document.getElementById("getinvolve").reset();
    },
    (error) => {
      console.log("FAILED...", error);
      showMessage("Oops!. Please try again later.", "error");
    }
  );
}

function showMessage(message, type) {
  let messageDiv = document.getElementById("formMessage");
  messageDiv.innerHTML = message;
  messageDiv.className = type; // Apply CSS class based on type
}
