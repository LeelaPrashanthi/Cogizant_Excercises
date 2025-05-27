// 6. Arrays and Methods

let eventArray = [
  { name: "Dance Workshop", category: "Dance" },
  { name: "Baking Workshop", category: "Cooking" },
  { name: "Rock Concert", category: "Music" }
];

// Add new event
eventArray.push({ name: "Jazz Night", category: "Music" });

// Filter music events
const musicEvents = eventArray.filter(event => event.category === "Music");

// Map to format display strings
const displayCards = musicEvents.map(event => `${event.category} Event: ${event.name}`);

console.log(displayCards);
// Output: ["Music Event: Rock Concert", "Music Event: Jazz Night"]
