const debounce = (fn, delay=100) => {
    let timerId;
   return function(){
    const context= this;
    const args = arguments;
   
    if(timerId) clearTimeout(timerId);
    timerId = setTimeout(()=>fn.apply(context,args),delay);
   };
};

btn.addEventListener("click",debounce(()=>{
    console.log("Hola...",new Date().toDateString());
},3000));