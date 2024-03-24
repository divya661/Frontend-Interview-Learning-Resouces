// The problem with this approach is that we cannot create new instances
const calculator1 = {
    total: 0,
    add: function(val){
        this.total += val;
        return this;
    },
    substract: function(val){
        this.total -= val;
        return this;
    },
    divide: function(val){
        this.total /= val;
        return this;
    },
    multiply: function(val){
        this.total *= val;
        return this;
    }
};

calculator1.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator1.total);
 
// Above problem is solved using Function
const CALC = function(){
    this.total = 0;
    this.add = (val) => {
        this.total += val;
        return this;
    }

    this.substract = (val) => {
        this.total -= val;
        return this;
    }

    this.multiply = (val) => {
        this.total *= val;
        return this;
    }

    this.divide = (val) => {
        this.total /= val;
        return this;
    }

    this.value = ()=>this.total;
 }

const calculator2 = new CALC();
calculator2.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator2.total);