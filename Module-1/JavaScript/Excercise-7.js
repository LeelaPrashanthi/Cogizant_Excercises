// 7. DOM Manipulation

const eventContainer = document.querySelector("#event-container");

const eventsForDisplay = [
  { name: "Yoga Session", date: "2025-06-15", seats: 10 },
  { name: "Cooking Class", date: "2025-07-20", seats: 0 }
];

function renderEvents(events) {
  eventContainer.innerHTML = "";  // Clear old content
  events.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <button ${event.seats === 0 ? "disabled" : ""}>Register</button>
    `;

    // Add event listener for registration
    card.querySelector("button").onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(events);  // Update UI after registration
      }
    };

    eventContainer.appendChild(card);
  });
}

renderEvents(eventsForDisplay);
