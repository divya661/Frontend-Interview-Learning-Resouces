// Showcase working of publisher subscriber pattern in JSON. This works similar to addEventListener in JS where a callback function is assigned to the event, and that callback function will be invoked when the event is fired
// removeEventListener can be used to remove the listener.
// Similar to this create a funcation Event can be used to remove the listener.
// Similar to this create a function Event that will have three methods:
// subscribe(fn): subscribes the function to the event
// unsubscribe(fn): unsubscribes the function from the event
// fire(data):when event is fired or published all the subscribed funcation should be invoked with the data.

// 1st observer
// const eventHandler = function (item) {
//   console.log("fired:" + item);
// };

// 2nd observer
// const eventHandler2 = function (item) {
//   console.log("Moved:" + item);
// };
// const event = new Event();
// subscribe 1st observer
// event.subscribe(eventHandler);
// event.fire("event #1");

// unsubscribe 1st observer
// event.unsubscribe(eventHandler);
// event.fire("event #2");
// output: "fired: event #1"

// subscribe 1st & 2nd observer
// event.subscribe(eventHandler);
// event.subscribe(eventHandler2);
// event.fire("event #3");
// output: "fired: event #3"
// output: "Moved: event #3"

// Event object to manage subscriptions and firing events
function Event() {
    this.subscribers = [];
  }
  
  // Method to subscribe a function to the event
  Event.prototype.subscribe = function(fn) {
    this.subscribers.push(fn);
  };
  
  // Method to unsubscribe a function from the event
  Event.prototype.unsubscribe = function(fn) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
  };
  
  // Method to fire the event and invoke all subscribed functions with data
  Event.prototype.fire = function(data) {
    this.subscribers.forEach(subscriber => subscriber(data));
  };
  
  // 1st observer
  const eventHandler = function(item) {
    console.log("fired: " + item);
  };
  
  // 2nd observer
  const eventHandler2 = function(item) {
    console.log("Moved: " + item);
  };
  
  const event1 = new Event();
  
  // subscribe 1st observer
  event1.subscribe(eventHandler);
  event1.fire("event #1");
  
  // unsubscribe 1st observer
  event1.unsubscribe(eventHandler);
  event1.fire("event #2");
  
  // output: "fired: event #1"
  
  // subscribe 1st & 2nd observer
  event1.subscribe(eventHandler);
  event1.subscribe(eventHandler2);
  event1.fire("event #3");
  // output: "fired: event #3"
  // output: "Moved: event #3"
  
  