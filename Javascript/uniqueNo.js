// console.log(unique()); // 1
// console.log(unique()); // 3
// console.log(unique()); // 5
// console.log(unique()); // 7

const oddNo = () => {
    let currentOddNo = 1;
  
    return () => {
      currentOddNo++; 
      while (currentOddNo % 2 != 0) {
        currentOddNo++; //3
      }
  
      return currentOddNo;// 3
    };
  };
  
  const unique = oddNo();
  
  console.log(unique());
  console.log(unique());
  console.log(unique());
  console.log(unique());
  