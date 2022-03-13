let numeroFibonacci=100;



function sumaString(pasado,pasado2) {
    
    let diferenciaCaracteres,arrayPasado,arrayPasado2, resultado=[], modulo=0;

    //Se convierte el dato en string para poder usar más adelante el metodo .LENGTH
    pasado = "0"+pasado;
    pasado2 = "0"+pasado2;
    //Haciendo uso de SPLIT para separar los caracteres
    arrayPasado=pasado.split('');
    arrayPasado2=pasado2.split('');
    // // console.log("Primer numero separado "+arrayPasado);
    // // console.log("Segundo numero separado "+arrayPasado2);
    //Calculando la diferencia de caracteres
    diferenciaCaracteres = arrayPasado.length - arrayPasado2.length;
    // // console.log("Diferencia en caracteres: "+diferenciaCaracteres);

    if (diferenciaCaracteres>0) {
        for (let i = 0; i < diferenciaCaracteres; i++) {
    
            arrayPasado2.unshift("0");
            // // console.log(arrayPasado2.length);
        }
    
    } else {
        diferenciaCaracteres= diferenciaCaracteres*(-1);
        for (let i = 0; i < diferenciaCaracteres; i++) {
            arrayPasado.unshift("0");
            
        }

    }
    // // console.log("Primer numero separado "+arrayPasado);
    // // console.log("Segundo numero separado "+arrayPasado2);
    
    let stringANumero;
    for (i = arrayPasado.length-1; i >= 0; i--) {
        // // stringANumero=parseInt(arrayPasado[3])+parseInt(arrayPasado2[3]);
        // // console.log(stringANumero);    //volviendo numero un string por parseInt
    
        stringANumero= (+arrayPasado[i]) + (+arrayPasado2[i]) + modulo;
        // console.log(stringANumero);    //volviendo numero un string por Otros metodos
        
        if (stringANumero>=10) {
            
            modulo=1;   //Asignacion rapida de cuando existe modulo en este caso
            resultado.unshift((stringANumero + "")[1]);    //Se guarda el valor menos significativo de la suma caracter en posicion #1 del string del numero.


        } else {
            modulo=0;   //Asignacion rapida de cuando NO existe modulo en este caso
            resultado.unshift(stringANumero+"");    //Se guarda el valor menos significativo de la suma. Hacer _+""_ permite convertir el numero a string rapidamente. 
            
        }
        

        
    }
        
    return resultado.join("").replace(/^(0)/g, '');  //Se retornan los numeros sumados y juntados para conformar un solo valor con precision.
}
// // console.log(sumaString(75,925));  //Ensayo de funcion para 2 numeros

function ciclosFibonacci(ciclo){
    let fibonacci = [];

    for (let i = 0; i < ciclo; i++) {
        if (i>1) {
            
            fibonacci.push(sumaString(fibonacci[i-1],fibonacci[i-2]));
            
        } else {
            fibonacci.push(1);
        }

    }
    return fibonacci;
}


// Calculo basico, cuando NO se requieren numeros muy grandes en JS, Se omite la funcion sumaString()
// for (let index = 0; index < mayor; index++) {
//     if (index>1) {
//         fibonacci.push(fibonacci[index-2]+fibonacci[index-1]);

//     }else{
//         fibonacci.push(1);
//     }
    
// }



console.log(ciclosFibonacci(numeroFibonacci));