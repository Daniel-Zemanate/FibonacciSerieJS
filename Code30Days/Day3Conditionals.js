// Given an integer, , perform the following conditional actions:

// 1<=N<=100
// If N is odd, print Weird
// If N is even and in the inclusive range of 1 to 6, print Not Weird
// If N is even and in the inclusive range of 7 to 20, print Weird
// If N is even and greater than 20, print Not Weird
// Print Weird if the number is weird; otherwise, print Not Weird.
let inputUser="", lectureArray=0;

process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function(userInput){
    inputUser += userInput;
    // // console.log(`input ${inputUser}`);
});

process.stdin.on("end", function(){
    inputUser = inputUser.split("\n");
    // // console.log(`split ${inputUser}`);
    main();
});

function readLine(){
    // // console.log(`return ${inputUser}`);
    return inputUser[lectureArray++];
};

function main(){
    let N = parseInt(readLine().trim(),10);

    //Comparison rules
    if(N%2 !== 0 || ((N%2 == 0) && (1<=N && N<=6))){
        // console.log(`Weird ${N}`);
        process.stdout.write("Weird \n");
    }else if((N%2 == 0) && ((7<=N && N<=20)) || N>20) {
        // console.log(`Not Weird ${N}`);
        process.stdout.write("Not Weird \n");
        
    }



};