function mainFunction(getCallBack){
    console.log("This is main function.")
    getCallBack()
}

function callBack(){
    console.log("This is callback function.")
}

mainFunction(callBack);

//simpleCall Back