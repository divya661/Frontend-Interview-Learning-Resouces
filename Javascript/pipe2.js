
const pipe2 = function(...fns){
    return function(val){
        for(let f of fns){
            val = f(val);
        }

        return val;
    };
};


const val = {salary: 10000};

const getSalary = (person)=>person.salary;
const addBonus = (netSalary) => netSalary+1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary*0.3);

const result = pipe2(
    getSalary,
    addBonus,
    deductTax
)(val);
// 7700
