import EventEmmiter from "node:events";

const abcd = EventEmmiter.once
const emmiter = new EventEmmiter();

// == This gives a **warning** if under one event more than given limit of listener is exceeded. ==
emmiter.setMaxListeners(2)

// == Emmitter.on() registers an event listener ==
// here 'abc' is the name of the event or actual event is 'abc'
// & the callback function is the event  handler
emmiter.on("abc", () => {
  console.log("abc event run 1")
})

emmiter.on("abc", () => {
  console.log("abc event run 2")
})

emmiter.on("abc", () => {
  console.log("abc event run 2")
})

emmiter.on("xyz", () => {
  console.log("xyz event run 3")
})

// console.log(emmiter)

// == Emmitter.emit() emits an event ==
// emmiter.emit("abc")

// this event will be registered but after emitting once it will be removed 
emmiter.once("temporary-event", () => {
  console.log("Temporary event is in the bizz");
})
// emmiter.emit("temporary-event"); // after this line the event will be vanished 

// We can make random events like this but 
// We don't make events like this in real world
// We probably will get some events from nodejs which we can work on
