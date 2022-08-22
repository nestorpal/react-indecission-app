const square = function (x) {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(16));

const getFirstName = (fullName) => {
    if (fullName) {
        return fullName.split(' ')[0];
    }
    return undefined;
}

console.log(getFirstName('Mike Tyson'));