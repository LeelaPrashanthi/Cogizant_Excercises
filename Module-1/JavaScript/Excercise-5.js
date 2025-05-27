// 5. Objects and Prototypes

// Event constructor function
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

// Create events
const event1 = new Event("Coding Bootcamp", "2025-08-01", 25, "Education");
const event2 = new Event("Rock Concert", "2025-09-10", 0, "Music");

// Clone events array with spread operator
const eventsList = [event1, event2];
const clonedEvents = [...eventsList];

// Display keys and values
clonedEvents.forEach(event => {
  console.log(Object.entries(event));
  console.log(`${event.name} availability: ${event.checkAvailability() ? "Available" : "Full"}`);
});
