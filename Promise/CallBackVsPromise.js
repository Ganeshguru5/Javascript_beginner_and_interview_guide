const f1=(val,callBack)=>{
    return callBack(val+10)
}

const callBack=(val)=>{
    return val+20
}

console.log(f1(1,callBack))

//clumsy callback

//replace with promise
const p1= (val)=> 
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(val+10)
        },3000)
    })
p1(1)
.then(x =>x+20)
.then(console.log)
.then(console.log("Lets increment 20"))
.then(y=>y+20)
.then(console.log)

