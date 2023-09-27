let text="Tommy was a good boy but Tommy"
let newText=text.replace("Tommy","Shelby")
//replace tommy with shelby
//replace is case sensitive
//it replace only the 1st text
console.log(newText)


//replace globally
let allreplace=text.replace(/Tommy/g,"Shelby");
console.log(allreplace)