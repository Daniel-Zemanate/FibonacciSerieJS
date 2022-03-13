// print integers 1 to N considering these rules:
// 1. print "Fizz" if an integer is devisible by 3
// 2. print "Buzz" if an integer is devisible by 5
// 3. print "FizzBuzz" if an integer is devisible by both 3 and 5


let N = 15; //number that defines the range to verify rules

for (let i = 1; i <= N; i++) {
    // the module is verify to make sure if number N is divisible following the rules
    if (i%3==0 && i%5==0) {
        console.log(i + ". " + "FizzBuzz");
    } else if(i%3==0) {
        console.log(i + ". " + "Fizz");
    } else if(i%5==0) {
        console.log(i + ". " + "Buzz");
    }else{
        console.log(i + ". ");

    }
    
}