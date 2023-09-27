let str = "Please locate where locate occurs!";
console.log(str.indexOf("locate"));//returns first occurence
console.log(str.lastIndexOf("locate"))//last occurence start at 20str
console.log(str.search("locate"))//returns the fist index location
let text = "The rain in SPAIN stays mainly in the plain";
console.log("((((");
console.log(text.match("ain"))//returns details and match only first match
console.log(text.match(/ain/g));// return all match 
console.log(text.match(/Ain/gi))//case intensive no care iof case
console.log(text.includes("rain"));//returns true or false
console.log(text.includes("rain",12));//returns true or false
//(word,start position)

text ="Ganesh guru"
console.log(text.startsWith("Ganesh"))
console.log(text.startsWith("Ganesh",6))
//(word,start position)

console.log(text.endsWith("guru"))
console.log(text.endsWith("guru",6))
//(word,start position)



