String.prototype.reverse=function(){
    var newword=""
    for(let i=this.length-1;i>=0;i--){
        newword=newword+this[i];
    }
    console.log(newword)
}

'Hello world'.reverse(); //returns drow olleH
