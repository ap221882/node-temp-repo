const EventEmitter = require("events");
//eventemitter is a class

const customEmitter = new EventEmitter();
//instance

//==on-listen for an event
//==emit-emit an event

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} & ${id}`);
});

// customEmitter.emit("response");

customEmitter.on("response", () => {
  console.log(`some other data recieved`);
});
//Note-First listen then emit

customEmitter.emit("response", "john", 34);
