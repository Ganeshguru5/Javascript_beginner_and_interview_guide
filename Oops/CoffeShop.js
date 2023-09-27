const coffeeData = [
    {
        name:"Espresso",
        Addons:[
            {
                name:'Milk',
                rate:60
            },
            {
                name:'Cream',
                rate:75
            },
            {
                name:'Latte',
                rate:100
            },
        ]
    },
    {
        name:"Cappuccino",
        Addons:[
            {
                name:'Milk',
                rate:80
            },
            {
                name:'Cream',
                rate:90
            },
            {
                name:'Latte',
                rate:125
            },
        ]
    },
    {
        name:"Espresso",
        Addons:[
            {
                name:'Milk',
                rate:100
            },
            {
                name:'Cream',
                rate:125
            },
            {
                name:'Latte',
                rate:150
            },
        ]
    }
]

class Coffee{
    constructor(coffeeName,NumofCups,Addons){
        this.coffeeName=coffeeName;
        this.NumofCups=NumofCups;
        this.Addons=Addons;
    }

}

function orderCoffe(coffeeName,NumofCups,Addons){

    let newCoffe =new Coffee(coffeeName,NumofCups,Addons)
    let billamount=0;
    let coffeName=newCoffe.coffeeName;
    let Addonsy=newCoffe.Addons;

    for(let i=0;i<3;i++){
        if(coffeeData[i].name===newCoffe.coffeeName){
           console.log("The name of the coffe is "+newCoffe.coffeeName);
           console.log("The num of cups ordered "+newCoffe.NumofCups)
           console.log("Addons are ");
           for(let m =0;m<newCoffe.Addons.length;m++){
            console.log(newCoffe.Addons[m])
           }
            for(let j=0;j<Addonsy.length;j++){
                for(let k=0;k<3;k++){
                    if(Addonsy[j]===coffeeData[i].Addons[k].name){
                        billamount=billamount+coffeeData[i].Addons[k].rate;
                    }
                }
           }
           break;
        }
        else{
            continue;
        } 
    }
    console.log("This is bill Amount :",billamount*newCoffe.NumofCups)
}

orderCoffe("Espresso",4,["Milk","Latte"])

