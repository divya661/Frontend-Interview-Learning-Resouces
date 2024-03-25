// Extend the arrays in Javascript such that an event 
// gets dispatched whenever an item is added or removed

Array.prototype.listeners = {};
Array.prototype.addListener = function (name, callback) {
  if (!this.listeners[name]) {
    this.listeners[name] = [];
  }
  this.listeners[name].push(callback);
};

Array.prototype.pushWithEvent = function (event, args) {
  this.push(...args);
  this.triggerEvent(event, args);
};

Array.prototype.triggerEvent = function (eventName, elements) {
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) =>
      callback(eventName, elements, this)
    );
  }
};

Array.prototype.popWithEvent = function (event, args) {
  const element = this.pop();
  this.triggerEvent(event, element);
};

Array.prototype.removeListener = function (eventName, callback) {
  if (this.listeners[eventName]) {
    this.listeners[eventName] = this.listeners[eventName].filter(
      (e) => e !== callback
    );
  }
};

const arr = [];
arr.addListener("add", (eventName, items, array) => {
  console.log("items were added", items);
});

arr.addListener("remove", (eventName, item, array) => {
  console.log(item, " was removed");
});
arr.pushWithEvent('add',[4,5]);
arr.popWithEvent('remove');
