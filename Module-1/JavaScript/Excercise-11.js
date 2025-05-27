// 11. Working with Forms

const form = document.getElementById("registrationForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", event => {
  event.preventDefault();
  errorMsg.textContent = "";

  const { name, email, event: selectedEvent } = form.elements;

  if (!name.value.trim()) {
    errorMsg.textContent = "Name is required.";
    return;
  }
  if (!email.value.trim() || !email.value.includes("@")) {
    errorMsg.textContent = "Valid email is required.";
    return;
  }
  if (!selectedEvent.value) {
    errorMsg.textContent = "Please select an event.";
    return;
  }

  console.log(`Registering ${name.value} for ${selectedEvent.value}`);
  form.reset();
  alert("Registration successful!");
});
