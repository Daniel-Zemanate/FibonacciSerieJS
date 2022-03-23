// Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation. When working with different bases, it is common to show the base as a subscript.

// The binary representation of 125 is 1111101. In base 10, there are 5 and 1 consecutive ones in two groups. Print the maximum, .

'use strict';

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



function main() {
    const n = parseInt(readLine().trim(), 10);
    let baseTwo="";
    let onesCounts=[],oneCounting=0,zeros=0, divitionBaseTwo=n;
    while(divitionBaseTwo!=1){
        
        if(divitionBaseTwo%2 == 1){
            oneCounting++;
        }else{
            onesCounts[zeros++]=oneCounting;
            oneCounting=0;
        }
        divitionBaseTwo=parseInt(divitionBaseTwo/2);
        
        if(divitionBaseTwo==1){oneCounting++;onesCounts[zeros++]=oneCounting;};
    }
    // console.log(onesCounts);
    console.log(Math.max(...onesCounts));
    
}
