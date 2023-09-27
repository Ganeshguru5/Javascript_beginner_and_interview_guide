const items=[
    {name:'Yamaka',price:200000},
    {name:'Rx100',price:60000},
    {name:'Honda',price:40000},
    {name:'Hero',price:200000},
    {name:'Rdx',price:60000},
    {name:'Rolex',price:40000}
]

const indexs=items.findIndex((item)=>{
    return item.price==60000
})
console.log(indexs)