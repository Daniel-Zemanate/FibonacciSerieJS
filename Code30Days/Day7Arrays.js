// Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

// 1<=n<=1000      1<=A[i]<=10000

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let flag = 0;

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

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    if(n>=1 && n<=1000){
      for(let i=0;i<n;i++){
            if(arr[i]>=1 && arr[i]<=10000){
              flag=1;
            }else{
                flag=0;
            };
          
      };
    if(flag){
        console.log(`${arr.reverse().join(" ")}`);
    };
    };

}