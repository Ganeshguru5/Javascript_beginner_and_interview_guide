const arr1=["Apple","Mango"]
const arr2=["blue","greeen"]
const arr3=["book","pencil"]

//concat two or more arrays
const added=arr1.concat(arr2,arr3)
console.log(added)

//copywithin
//copywithin(target,start,end)
//end<
const copiedwithin=added.copyWithin(0,1,3)
console.log(copiedwithin)

//entries
const entry=added.entries()
for(let x of entry){
    //console.log(x)
}
//output
// [ 0, 'Mango' ]
// [ 1, 'blue' ]
// [ 2, 'blue' ]
// [ 3, 'greeen' ]
// [ 4, 'book' ]
// [ 5, 'pencil' ]

//fill(value,start,end)
//fill the given value in the start to end
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vegtables=["Brinjal","potato","tomato"]
const both = fruits.concat(vegtables)
both.fill("pencil",2,4)
console.log(both)

