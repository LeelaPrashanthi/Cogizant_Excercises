// 9. Async JS, Promises, Async/Await

const spinner = document.getElementById("spinner");
const eventsDiv = document.getElementById("events");

// Mock API URL (you can replace with your own)
const apiURL = "https://mockapi.io/projects/yourproject/events";

// Using fetch with then/catch
function fetchEvents() {
  spinner.style.display = "block";
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      spinner.style.display = "none";
      eventsDiv.innerHTML = data.map(ev => `<p>${ev.name} on ${ev.date}</p>`).join("");
    })
    .catch(err => {
      spinner.style.display = "none";
      eventsDiv.textContent = "Failed to load events.";
      console.error(err);
    });
}

// Async/Await version with loading spinner
async function fetchEventsAsync() {
  spinner.style.display = "block";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    eventsDiv.innerHTML = data.map(ev => `<p>${ev.name} on ${ev.date}</p>`).join("");
  } catch (error) {
    eventsDiv.textContent = "Failed to load events.";
    console.error(error);
  } finally {
    spinner.style.display = "none";
  }
}

// Call one of these to test
// fetchEvents();
fetchEventsAsync();
