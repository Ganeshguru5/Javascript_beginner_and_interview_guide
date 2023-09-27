const items=[
    {name:'Yamaka',price:5},
    {name:'Rx100',price:8},
    {name:'Honda',price:9},
    {name:'Hero',price:5},
    {name:'Rdx',price:6},
    {name:'Rolex',price:1}
]

const reduce_obj=items.reduce((acc,item)=>{
    return item.price+acc
},0)

console.log(reduce_obj)

//if true it stops the loop and return false 
