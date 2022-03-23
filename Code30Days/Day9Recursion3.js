// Complete the factorial function in the editor below. Be sure to use recursion.

// factorial has the following paramter:

// int n: an integer



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function Factorial(n) {
    // Write your code here
    
    if(n>1){
        return n * Factorial(n-1);
    }else{
        return 1;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = Factorial(n);

    ws.write(result + '\n');

    ws.end();
}
