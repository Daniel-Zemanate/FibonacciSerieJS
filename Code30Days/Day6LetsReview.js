// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note:  is considered to be an even index. Rules  2<=S<=10000 1<=T<=10

function processData(input) {
    //Enter your code here
    let arrayInput=input.split("\n");
    let even="",odd="";
    
    if(parseInt(arrayInput[0])>=1 && parseInt(arrayInput[0])<=10)
    {
        
        for( let i=1;i<=parseInt(arrayInput[0]);i++){
            
            for(let o=0;o<arrayInput[i].length;o++){
                if (o==0 || o%2==0)
                {
                    even += arrayInput[i][o];
                }
                if (o%2!==0)
                {
                    odd += arrayInput[i][o];
                }
            }
            if(arrayInput[i].length>=2 && arrayInput[i].length<=10000){
                console.log(`${even} ${odd}`);
            }
            even="";odd="";
            
            
        }
    
    } 
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

