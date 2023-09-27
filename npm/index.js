const fetch=require('node-fetch')

fetch('https://www.boredapi.com/api/')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        update(data)
    })
    .catch((error)=>{
        console.log("warn")
    })
function update(data){
    console.log(data)
}

const GetTopAnime=async()=>{
    const temp = await fetch('')
}

 
