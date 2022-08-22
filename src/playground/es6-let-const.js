//VAR STYLE
var nameVar = 'Nextor';
var nameVar = 'Del Futurox'; // var variable can be renamed with same name and different value
console.log('nameVar', nameVar)

//LET STYLE
let nameLet = 'Johnny';
nameLet = 'Depp';
//let nameLet = 'Grindelwald'; // Can not redefine
console.log('nameLet', nameLet);

const nameConst = 'Amber';
//nameConst = 'Head'; // Can not reassign value
console.log('nameConst', nameConst);

//Function Scoping
function getPetName() {
    var petName = 'Rocky';
    return petName;
}

getPetName();
//console.log(petName); // Can not access function variable

//Block Scoping
var fullName = 'Nestor Panu';
if (fullName) {
    var firstName = fullName.split(' ')[0]; // var can be accesed but no const neither let
    console.log(firstName);
}
console.log(firstName);