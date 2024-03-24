Promise.myall = function(tasksArray){
    return new Promise((resolve, reject) => {
      const output = [];
      let i=0;
      tasksArray.forEach((promise, index) => {
        promise
          .then((data) => {
            output[index] = data;
            i++;
            if (i === tasksArray.length) {
              resolve(output);
            } 
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
};
  
const tasksArray = [dummyAPI(1000), dummyAPI(5000), dummyAPI(3000)];
  
Promise.myall(tasksArray)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  