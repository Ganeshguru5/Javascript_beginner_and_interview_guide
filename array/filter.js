const items=[
    {name:'Yamaka',price:200000},
    {name:'Rx100',price:60000},
    {name:'Honda',price:40000},
    {name:'Hero',price:20000},
    {name:'Rdx',price:60000},
    {name:'Rolex',price:40000}
]

const filterredItems=items.filter((item)=>{
    return item.name =='Yamaka'
})
console.log(filterredItems)


//filter returns returns group of objects or element
//it returns even a single element in an array