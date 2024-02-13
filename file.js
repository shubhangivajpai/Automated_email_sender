document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const requestData = {
      name: formData.get("name"),
      email: formData.get("email"),
      content: "Thanks for Subscribing"
    };
  
    fetch("https://api.brevo.com/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer xsmtpsib-403d236085362398175e6cca4acb44e2eeb03f64e595650494db83712f5a68e2-50rqaPyLfOhX3sYB"
      },
      body: JSON.stringify(requestData)
    })
    .then(response => {
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to send email.");
    });
  });
  