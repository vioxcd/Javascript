/*
School:
- Properties:
    name := string
    level := ['primary', 'middle', 'high']
    numberOfStudents := number

- Getters:
    all properties have getters

- Setters:
    numberOfStudents has setters

- Methods:
    quickFacts()
    pickSubstituteTeacher() := static method


Primary:
    Includes everything in School class
    + pickupPolicy properties

Middle:
    does not include any additional properties or methods

High:
    Includes everything in School class
    + sportsTeams  properties

*/

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        if(Number.isInteger(numberOfStudents)) {
            this._numberOfStudents = numberOfStudents;
        } else {
            throw new Error('Not a number');
        }

    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let random = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[random];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        // primary passed as an argument to the parent level
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13');
lorraineHansbury.quickFacts();

let sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
console.log(sub);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
