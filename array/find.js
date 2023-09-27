const items=[
    {name:'Yamaka',price:200000},
    {name:'Rx100',price:60000},
    {name:'Honda',price:40000},
    {name:'Yamaka',price:200000},
    {name:'Rdx',price:60000},
    {name:'Rolex',price:40000}
]

const finditem=items.find((item)=>{
    return item.name ==='Yamaka'
})
console.log(finditem)

//find returns a single object

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}