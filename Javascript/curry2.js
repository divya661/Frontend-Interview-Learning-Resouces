const sum = (...args1)=>{
    const initialArg = [...args1];
    if(initialArg.length===0){
        return 0;
    }

    const temp = (...args2)=>{  
        initialArg.push(...args2);

        if(args2.length==0){
            return initialArg.reduce((a,b)=>a+b,0);
        } else {
            return temp;
        }
    };

    return temp;
}


console.log(sum(1,2,3,4)());
console.log(sum(2,2)(3,4)());
console.log(sum(3)(2)(3)(4)());
console.log(sum(1,2,3)(4)());
console.log(sum(1)(2,3,4)());
console.log(sum());