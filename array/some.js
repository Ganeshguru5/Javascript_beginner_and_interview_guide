const items=[
    {name:'Yamaka',price:5},
    {name:'Rx100',price:8},
    {name:'Honda',price:9},
    {name:'Hero',price:5},
    {name:'Rdx',price:6},
    {name:'Rolex',price:1}
]

const someitems=items.some((item)=>{
    console.log(item.price,item.price==8)
    return item.price==8
    
})
console.log("******Final******")
console.log(someitems)

//if true it stops the loop and return true 
