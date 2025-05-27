// 2. Syntax, Data Types, and Operators

const eventName = "Community Yoga Session";
const eventDate = "2025-06-15";
let availableSeats = 20;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats left: ${availableSeats}`);

// Simulate user registering for the event
function registerSeat() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registration successful! Seats remaining: ${availableSeats}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}

registerSeat();  // Seats decrease by 1
