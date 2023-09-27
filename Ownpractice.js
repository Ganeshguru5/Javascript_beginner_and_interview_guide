const Users = [
    {
        name:"Ganez",
        username:"ganez08",
        password:"12454",
        private:true
    },
    {
        name:"torfe",
        username:"torfe89",
        password:"12454",
        private:true
    },
    {
        name:"Ram",
        username:"ram56",
        password:"8698",
        private:false
    },
    {
        name:"mohab",
        username:"mohan56",
        password:"12454",
        private:false
    },
    {
        name:"mathew",
        username:"mathew98",
        password:"12454",
        private:true
    },
]

const privateAccounts = Users.filter((user)=>{
    return user.private===true;
})
//console.log(privateAccounts)

//find stop when it comes true
//filter filters all items

const poped=Users.pop()
Users.push("ganesh")

const numbers = [0,1,2,3,4,4,5,6,7]
// numbers.splice(0,4)
//console.log(numbers)

const letters = new Set(['g','a','n','e','s','h','g']);

console.log(letters)
letters.forEach((value)=>{
    //console.log(value)
})
console.log(letters.values())

const arr=[4,5,6,7,8,9]

// for(const num of letters){
//     //console.log(num)
// }
// console.log(arr instanceof Set)

// arr.slice(1,2)
// console.log(arr.splice(1,2))

// const app = 'FaceBook';
// console.log(app.toUpperCase())
console.log(arr.findIndex(4))
