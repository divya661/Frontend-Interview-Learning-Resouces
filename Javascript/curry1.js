const curry = () => {
    let sum =0;

    return function(num=0){
        sum = sum+num;
        return sum;
    };
}

const sum = curry();

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(3)); // 6
console.log(sum(14)); // 20
