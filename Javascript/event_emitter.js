// Implement an EventEmitter class.This class is important for creating event-driven applications and involves subscribing to events, emitting them, handling optional parameters, and managing subscriptions.

// The main focus of this lab is to implement the EventEmitter class with the following two methods:

// subscribe - This method will accept two arguments: the name of an event as a string and a callback function. When the event is emitted, the callback function will be executed. Events can have multiple listeners and their callbacks must be invoked in the order they were added. The method should return an object with an unsubscribe method that a user can use to unsubscribe.

// emit - This method will receive the name of an event and an optional array of arguments that will be provided to the associated callbacks. If no callbacks are subscribed to the event, an empty array should be returned, otherwise, an array with the results of all callbacks should be returned, in order of their addition.

// Here are some examples to help you understand the desired EventEmitter class implementation:
// Example 1:
// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callbacks are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
// Example 2:
// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]
// Note that the emit method should be able to accept an OPTIONAL array of arguments.
// Example 3:
// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions

class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    subscribe(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
  
      this.events[eventName].push(callback);
      const index = this.events[eventName].length;
      const unsubscribe = () => {
        this.events[eventName].splice(index, 1);
      };
      return { unsubscribe };
    }
  
    emit(eventName, args = []) {
      const callbacks = this.events[eventName];
      if (!callbacks || !callbacks.length) {
        return [];
      }
  
      return callbacks.map((callback) => callback(...args));
    }
  }
  
  // Example usage:
  
  // Example 1
  const emitter1 = new EventEmitter();
  emitter1.emit("firstEvent"); // []
  emitter1.subscribe("firstEvent", function cb1() {
    return 5;
  });
  emitter1.subscribe("firstEvent", function cb2() {
    return 6;
  });
  console.log(emitter1.emit("firstEvent")); // [5, 6]
  
  // Example 2
  const emitter2 = new EventEmitter();
  emitter2.subscribe("firstEvent", function cb1(...args) {
    return args.join(",");
  });
  console.log(emitter2.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
  console.log(emitter2.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
  
  // Example 3
  const emitter3 = new EventEmitter();
  const sub = emitter3.subscribe("firstEvent", (...args) => args.join(","));
  console.log(emitter3.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
  sub.unsubscribe();
  console.log(emitter3.emit("firstEvent", [4, 5, 6])); // []
  