// 3. Conditionals, Loops, and Error Handling

const events = [
  { name: "Yoga", date: "2025-06-15", seats: 5 },
  { name: "Music Fest", date: "2024-12-01", seats: 0 }, // past or full event
  { name: "Cooking Workshop", date: "2025-07-10", seats: 10 }
];

const today = new Date();

function displayValidEvents() {
  events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate >= today && event.seats > 0) {
      console.log(`Upcoming Event: ${event.name} on ${event.date}, Seats left: ${event.seats}`);
    }
  });
}

function register(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (new Date(event.date) < today) throw new Error("Event already passed");
    if (event.seats <= 0) throw new Error("No seats available");

    event.seats--;
    console.log(`Registered for ${event.name}. Seats remaining: ${event.seats}`);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

displayValidEvents();
register("Yoga");
register("Music Fest"); // Will trigger error
