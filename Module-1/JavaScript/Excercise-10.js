// 10. Modern JavaScript Features

const greetEvent = ({ name = "Event", date = "TBD" } = {}) => {
  console.log(`Welcome to the ${name} happening on ${date}`);
};

const event = { name: "Marathon", date: "2025-10-01", seats: 100 };
greetEvent(event);

greetEvent();  // Uses default parameters
