process.stdin.resume();
process.stdin.setEncoding('UTF-8');

// There are three variables created to save the full input from user using an array
var inputUser = "";
var inputArray = "";
var inputLine = 0;

// Data is acquire and set to inputUser as a full package, must have to press ENTER to consider input is done for the actual line.
process.stdin.on('data', function (inUser) {
    inputUser += inUser;
});

// Full package of info is separate into elements of an array using the split parameter "\n". to trigger process 'end' event, use CTRL + d.
process.stdin.on('end', function () {
    inputArray = inputUser.split("\n");
    main();    
});

// Function to read avery element of the container array. Every time is use, it moves to the next input line by the user.
function readLine() {
    return inputArray[inputLine++];
}

function main() {
    // Fixed variables.
    var i = 4
    var d = 4.0
    var s = "Hello World, it's me AGAIN!!!, you wrote: "
    // Declaring integer, double, and String variables.
    let integerUser=0,doubleUser=0.0,stringUser="";

    // Reading and saving an integer, double, and String variables.

    // // integerUser=parseInt(readLine());
    integerUser = (+readLine());
    // // doubleUser=parseFloat(readLine());
    doubleUser = (readLine()*1.0);
    // // stringUser=toString(readLine());
    stringUser=readLine();


    // Print the sum of both integer variables on a new line.
    console.log(`${i + integerUser}`);
    // Print the sum of the double variables on a new line.
    console.log(`${(d + doubleUser).toFixed(1)}`);
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + stringUser);

}