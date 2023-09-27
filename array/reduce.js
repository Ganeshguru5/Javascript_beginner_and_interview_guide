const arr=[6,5,7,5,4,8,5,4,3]

let total
const sum=arr.reduce((acc,curr)=>{
    return acc+curr
},0);
console.log(sum)