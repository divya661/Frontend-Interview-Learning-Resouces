
const memoize = function (fn) {
    const cache = {};
   return function () {
     const KEY = JSON.stringify(arguments) ;
     console.log("key = ", KEY, " cache", cache);
 
     if (KEY in cache) {
       console.log("memo value");
       return cache[KEY];
     }
 
     console.log("not memo value");
     const evaluatedValue = fn.apply(this, arguments);
     cache[KEY] = evaluatedValue;
     return evaluatedValue;
   };
 };
 
 const func1 = (v) => {
   console.log("v is " + v);
   return v;
 };
 const memoizeFunc1 = memoize(func1);
 
 console.log(memoizeFunc1(1));
 console.log(memoizeFunc1(2));
 console.log(memoizeFunc1(1));
 console.log(memoizeFunc1(2));
 