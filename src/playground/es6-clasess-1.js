class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // accesses parent method
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() { // overrides parent method with same name
        let description = super.getDescription();
        if (this.hasMajor()) {
            description = `${description}. Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGretting() {
        let gretting = super.getGretting();
        gretting += this.hasHomeLocation() ? ` I'm visiting from ${this.homeLocation}` : '';
        return gretting;
    }
}

const me =
    // new Student('Nextor', 29, 'Engineer');
    new Traveler('Nextor', 29, 'Peru');
// console.log(me);
console.log(me.getGretting());
// console.log(me.getDescription());
// console.log(me.hasMajor());

const other =
    // new Student();
    new Traveler();
// console.log(other);
console.log(other.getGretting());
// console.log(other.getDescription());
// console.log(other.hasMajor());