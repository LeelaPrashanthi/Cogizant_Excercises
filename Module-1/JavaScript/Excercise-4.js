// 4. Functions, Scope, Closures, Higher-Order Functions
let allEvents = [];

function addEvent(event) {
  allEvents.push(event);
}

function registerUser(eventName, userName) {
  const event = allEvents.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`${userName} registered for ${eventName}. Seats left: ${event.seats}`);
    return true;
  } else {
    console.log(`Registration failed for ${userName} on ${eventName}`);
    return false;
  }
}

// Closure to track total registrations by category
function createRegistrationTracker(category) {
  let count = 0;
  return function register() {
    count++;
    console.log(`Total registrations for ${category}: ${count}`);
  }
}

const musicTracker = createRegistrationTracker("Music");

// Higher-order function to filter events by category with callback
function filterEventsByCategory(category, callback) {
  const filtered = allEvents.filter(event => event.category === category);
  callback(filtered);
}

// Example usage:
addEvent({ name: "Jazz Night", date: "2025-07-20", seats: 15, category: "Music" });
addEvent({ name: "Painting Class", date: "2025-07-22", seats: 10, category: "Art" });

filterEventsByCategory("Music", events => {
  events.forEach(e => console.log("Music Event:", e.name));
});

registerUser("Jazz Night", "Alice");
musicTracker();  // Closure call increments count
musicTracker();
