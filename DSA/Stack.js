var Stack = function(){
    this.count=0;
    this.storage={};

    this.push = function(value){
        this.storage[this.count]=value;
        this.count++;
       
    }
    this.showStorage=function(){
        return this.storage
    }
    this.pop=function(value){
        if(this.count===0){
            return undefined;
        }
        this.count--;
        var result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size=function(){
        return this.count;
    }
    this.peek=function(){
        return this.storage[this.count-1];
    }
}

var myStack=new Stack();

myStack.push(1);
myStack.push(4);
myStack.push(3);
myStack.push(7);
console.log(myStack.showStorage())
myStack.pop()
console.log(myStack.showStorage())
