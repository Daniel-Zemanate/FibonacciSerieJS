// First exercise. Print "Hello, world." in a console line, then is necessary
// to print in a second console line an input message by a user

let messageInput;
function processInput(inputString){
    process.stdout.write("============================== \n");
    // Next line will print the "Hello, World" string
    console.log("Hello, World.");
    
    // Next line will print the input string by user
    console.log(`${inputString}==============================` );
}

// Giving structure to the STDIN
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write("Type a message to the whole world \n\n");

//Setting interface to get input from user
process.stdin.on('data', function (userInput) {
    process.stdout.write("\n\n");
    processInput(userInput);
    process.exit();
});

process.on('exit', function () {
  process.stdout.write('\nend\n');
});
