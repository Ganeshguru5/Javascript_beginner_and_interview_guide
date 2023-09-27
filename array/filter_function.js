
const ages = [32, 33, 16, 40];
const filteredpersons=ages.filter(checkage);

function checkage(age){
    return age >=18;
}

console.log(filteredpersons);