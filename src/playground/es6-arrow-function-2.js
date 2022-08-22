// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
}

// this keyword - no longer bound, instead use THIS value of the context they were created in

const user = {
    name: 'Nextor'
    , cities: [
        'Philadelphia'
        , 'New York'
        , 'Dublin'
    ]
    , printPlacesLived() {
        // this.cities.forEach((city) => {
        //     console.log(`${this.name} has lived in ${city}`);
        // });

        const cityMessages = this.cities.map((city) => { // can transform each item getting a new array back
            return `${this.name} has lived in ${city}`
        });
        return cityMessages;
    }
}

//user.printPlacesLived();
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [
        5
        , 6
        , 7
    ]
    , multiplyBy: 8
    , multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());