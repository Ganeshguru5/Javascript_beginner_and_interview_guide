let string = "Ganeshguru"
console.log(string.length)//to find the len of string
console.log(string.slice(0,4))//0-3 print
console.log(string.slice(-4,-1))//-4 to -2
//G a n e s h  g  u  r  u
//            -4  -3  -2 -1   
console.log(string.slice(5)) //from 5 to last
console.log(string.slice(-3)) //from -3 to last
console.log(string.substring(-1,4))//similar to slice if negative params take as zero
console.log(string.substr(0,4))//substr is deperecated

