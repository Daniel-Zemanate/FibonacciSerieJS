// Complete the Difference class by writing the following:

// A class constructor that takes an array of integers as a parameter and saves it to the  instance variable.
// A computeDifference method that finds the maximum absolute difference between any  numbers in  and stores it in the  instance variable.
// input: 
// 3       __elements[] size N = 3
// 1 2 5   __elements = [1, 2, 5]


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    class Difference{
        elements: number[];
        
        constructor(elements:number[]){
            this.elements=elements;
            // console.log(this.elements);
        }
        computeDifference(){
            
            let maximumDifference = (Math.max(...this.elements)-Math.min(...this.elements));
            return maximumDifference;
        }
    }    
    let n=readLine();
    let dataString =readLine().split(" ");
    let numData;
    numData = dataString.map(dat => +dat ) ;
    // console.log(`DataString= ${numData}`);
    
    
    let dif=new Difference(numData);
    
    console.log(dif.computeDifference());
}
