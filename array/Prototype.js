var fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.myUcase=function(){
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
      }
}
fruits.myUcase();
console.log(fruits)

let numbers=[8,7,6,5,4,5,6,7]
Array.prototype.myLogic=function(){
    for(let i=0;i<numbers.length;i++){
        numbers[i]=numbers[i]+1
    }
}

numbers.myLogic();
console.log(numbers)