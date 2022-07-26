// Its important to verify arrow functions. I had to use IFs in calculate function

// You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

// Complete the Student class by writing the following:

// A Student class constructor, which has  parameters:
// A string, .
// A string, .
// An integer, .
// An integer array (or vector) of test scores, .
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName,lastName,idNumber,scores){
        super(firstName,lastName,idNumber);
        
        this.firstName=firstName.slice(0,10);
        this.lastName=lastName.slice(0,10);
        if(idNumber<=9999999 && idNumber!=isNaN){
            this.idNumber=idNumber;
        }
        this.scores=scores;
        
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        
        let grade= this.scores.reduce((i,f,c,a)=>i+f)/this.scores.length;
        if(grade>=90 && grade <= 100){return "O"};
        if(grade>=80 && grade < 90){return "E"};
        if(grade>=70 && grade < 80){return "A"};
        if(grade>=55 && grade < 70){return "P"};
        if(grade>=40 && grade < 55){return "D"};
        if(grade < 40){return "T"};
        
    
        
        // if (grade<=100 && grade >=0){
            
        //     return 90 <= grade <= 100 ? "O":
        //     80 <= grade < 90 ? "E":
        //     70 <= grade < 80 ? "A":
        //     55 <= grade < 70 ? "P":
        //     40 <= grade < 55 ? "D":
        //     40 > grade ? "T":"T";
            
        // }
    };
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
