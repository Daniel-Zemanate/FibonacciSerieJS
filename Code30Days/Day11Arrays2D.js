// Calculate the hourglass sum for every hourglass in INPUT arr, then print the maximum hourglass sum. 
// sampleInput
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// -----Hourglasses: Maximun value: 19
// 1 1 1   1 1 0   1 0 0   0 0 0
//   1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0

// 0 1 0   1 0 0   0 0 0   0 0 0
//   1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0

// 1 1 1   1 1 0   1 0 0   0 0 0
//   0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0

// 0 0 2   0 2 4   2 4 4   4 4 0
//   0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0

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
let arr=[];
let a=0,b=0,c=0,d=0,e=0,f=0,g=0,hg=[];
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    // console.log(arr);
    for(let i = 0; i<4;i++){
        for(let j = 0; j<4;j++){
            a=arr[i][j];b=arr[i][j+1];c=arr[i][j+2];
            d=arr[i+1][j+1];
            e=arr[i+2][j];f=arr[i+2][j+1];g=arr[i+2][j+2];

            hg.push(a+b+c+d+e+f+g);
        }
        
    }
    console.log(Math.max(...hg));

}
