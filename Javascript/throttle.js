
const throttle = (func, limit) => {
    let timerId;
    let lastRan;
  
    return function () {
      const context = this;
      const args = arguments;
  
      if (!lastRan) {
        func.apply(context, arguments);
        lastRan = Date.now();
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
  