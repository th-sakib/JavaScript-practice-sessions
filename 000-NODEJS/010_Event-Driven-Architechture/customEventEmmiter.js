class myCustomEventEmmiter {
  constructor() {
    this._events = {}
    this.maxEventLength = 10
  }

  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler]
    }
  }

  // This is actually wrong,
  // Because the the event name associated with once can be used in other event registration method like "on()"
  // So we will gonna delete all of the handler even which was registered by on() method.
    // note: I am keeping this mistake by intension, because it will remind me of such a silly mistake
  once(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler]
      this._events[eventName + "once"] = true;
    }
  }

  emit(eventName, ...args) {
    const callHandler = (eventName) => {
      this._events[eventName].map(eventHandler => {
        eventHandler(args)
      });
    };

    if (this._events[eventName]) {
      if (this._events[eventName + "once"] === true) {
        callHandler(eventName)
        delete this._events[eventName]
        delete this._events[eventName + "once"]
      } else {
        callHandler(eventName)
      }
    }
  };
};

const emmiter = new myCustomEventEmmiter()

emmiter.on("a", () => {
  console.log("number 1 event")
})

emmiter.on("a", () => {
  console.log("number 1.2 event")
})

emmiter.on("b", () => {
  console.log("number 2 event")
})

emmiter.once("c", () => {
  console.log("number 3 event")
})

console.log(emmiter)
emmiter.emit("a");
emmiter.emit("b");
emmiter.emit("c")
console.log(emmiter)

