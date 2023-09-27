function Question1(array){
    let AnsArray=[];
    for(let i=0,j=array.length-1;i<array.length,j>=0;i++,j--){
        if(i!==j){
            AnsArray.push(array[j]);
            AnsArray.push(array[i]);
        }
        else{
            AnsArray.push(array[i]);
            break;
        }
        if(AnsArray.length==array.length){
            break;
        }
    }
    console.log(AnsArray)
}

Question1([4, 5, 7, 8, 9])
Question1([2, 4, 6, 8, 10,11])