const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("sucess")
    })
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("failure")
    })
})


p1.then(console.log) //no need to catch when resolve
p2.then(console.log).catch(console.log)
//need to catch the error when reject

Promise.all([p1,p2]).then(console.log).catch(console.log)
//if both are resolve display both in array
//if any one is reject display failure

Promise.all([p1,p2]).then(console.log).catch(console.log)
//return each individual response
//if we increase the time out if come is diaplay . No last one