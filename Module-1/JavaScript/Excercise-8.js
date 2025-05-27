// 8. Event Handling

const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");
const eventContainer = document.getElementById("eventContainer");

const allEvents = [
  { name: "Jazz Night", category: "Music", seats: 10 },
  { name: "Baking Class", category: "Cooking", seats: 5 },
  { name: "Rock Concert", category: "Music", seats: 0 }
];

function render(events) {
  eventContainer.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.textContent = `${event.name} (${event.category}) - Seats: ${event.seats}`;
    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.disabled = event.seats === 0;
    btn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        render(filteredEvents());
      }
    };
    card.appendChild(btn);
    eventContainer.appendChild(card);
  });
}

function filteredEvents() {
  const category = categoryFilter.value;
  const searchTerm = searchBox.value.toLowerCase();
  return allEvents.filter(event =>
    (category === "all" || event.category === category) &&
    event.name.toLowerCase().includes(searchTerm)
  );
}

// Filter events on category change
categoryFilter.onchange = () => {
  render(filteredEvents());
};

// Search on keydown
searchBox.onkeydown = () => {
  setTimeout(() => {  // Delay for user input completion
    render(filteredEvents());
  }, 200);
};

render(allEvents);
