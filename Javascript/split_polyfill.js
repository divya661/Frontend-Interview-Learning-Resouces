String.prototype.mySplit = function(delimiter){
    const context = this;
    const res = [];

    if(delimiter==='') return Array.from(context);
    const startSplit = (str) => {
        // if(i>=context.length) return;
        if(str.length===0) return;
        const index = str.indexOf(delimiter);
        if(index>=0){
            const partition = str.substring(0, index);
            res.push(partition);
            
            startSplit(str.substring(index+delimiter.length));
        } else {
            res.push(str);
        }
    };

    startSplit(context);
    
    return res;
}

ans1="The quick the fox jumps the lazy dog.".mySplit("the");
console.log(ans1);
// [ 'The quick ', ' fox jumps ', ' lazy dog.' ]
console.log("The quick the fox jumps the lazy dog.".mySplit(""));
// [
//     'T', 'h', 'e', ' ', 'q', 'u', 'i',
//     'c', 'k', ' ', 't', 'h', 'e', ' ',
//     'f', 'o', 'x', ' ', 'j', 'u', 'm',
//     'p', 's', ' ', 't', 'h', 'e', ' ',
//     'l', 'a', 'z', 'y', ' ', 'd', 'o',
//     'g', '.'
//   ]
console.log("The quick the fox jumps the lazy dog.".mySplit(" "));
// [
//     'The',   'quick',
//     'the',   'fox',
//     'jumps', 'the',
//     'lazy',  'dog.'
//   ]