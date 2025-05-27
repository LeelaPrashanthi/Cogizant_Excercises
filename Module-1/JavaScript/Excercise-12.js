// 12. AJAX & Fetch API

const mockAPI = "https://mockapi.io/projects/yourproject/registrations";

function submitRegistration(data) {
  console.log("Sending registration data:", data);

  // Simulate delayed response with setTimeout and fetch
  setTimeout(() => {
    fetch(mockAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) throw new Error("Network response not OK");
      return response.json();
    })
    .then(result => alert("Registration successful!"))
    .catch(error => alert("Registration failed: " + error.message));
  }, 2000);  // 2 seconds delay
}

// Example usage:
submitRegistration({ name: "Alice", email: "alice@example.com", event: "Yoga" });
