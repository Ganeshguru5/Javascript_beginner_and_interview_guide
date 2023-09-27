const items=[
    {name:'Yamaka',price:200000},
    {name:'Rx100',price:60000},
    {name:'Honda',price:40000},
    {name:'Hero',price:200000},
    {name:'Rdx',price:60000},
    {name:'Rolex',price:40000}
]
const str="483984940"
const arr=Array.from(str,mapFn)

function mapFn(x){
    return Number(x)
}
const setted=new Set(arr)//make as set
const setted1=Array.from(new Set(arr))

console.log(setted1)

const makearray=str.split("")
console.log(makearray)
