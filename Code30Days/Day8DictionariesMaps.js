// Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

// 1<=n<=10E5   1<=queries<=10E5

// On a new line for each query, print Not found if the name has no corresponding entry in the phone book; otherwise, print the full  and  in the format name=phoneNumber.

function processData(input) {
    
    //Enter your code here
    
    let arrayInput = input.trim().split("\n");
    let n = parseInt(arrayInput[0]);
    let namePhone=[];
    let phoneBook= new Map();
    let i=0;
    for(i=1;i<=n;i++){
        namePhone = arrayInput[i].split(" ");
        // console.log(`0. ${namePhone[0]}`);
        // console.log(`1. ${namePhone[1]}`);
        
        phoneBook.set(namePhone[0],namePhone[1]);
        // console.log(phoneBook);

    };
    
    for(i=(n+1);i<arrayInput.length;i++){

        if(phoneBook.has(arrayInput[i])){
            
            console.log(`${arrayInput[i]}=${phoneBook.get(arrayInput[i])}`);
            
        }else{
            console.log("Not found");
        }
        
    }
    
    
    
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
