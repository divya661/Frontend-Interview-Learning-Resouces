const flattenObj = (obj) => {
    const result = [];
  
    const temp = (newObj) => {
      for (let value of Object.values(newObj)) {
        if (typeof value === "object") {
          temp(value);
        } else {
          result.push(value);
        }
      }
    };
  
    temp(obj);
  
    return result;
  };
  
  input = {
    a: 1,
    b: 2,
    c: {
      d: "string",
      e: [10, 20, [30]],
    },
  };
  
  // output = [1, 2, "string", 10, 20, 30];
  
  console.log(flattenObj(input));
  