function Queue(){
    var collection=[];
    this.viewqueue=()=>{
        return collection;
    }
    this.enqueue=(value)=>{
        collection.push(value)
    }
    this.dequeue=()=>{
        collection.shift();
    }
}

let oneque=new Queue();
oneque.enqueue(1);
oneque.enqueue(2);
oneque.enqueue(3);
oneque.enqueue(4);

console.log(oneque.viewqueue())
oneque.dequeue()
console.log(oneque.viewqueue())
