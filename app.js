'use strict'
const yazin = "Yazin";

var esVegano = true;

function miEdad(num) {
    var edad = 30;
    for (let i = 1; i <= num; i++) {
        if (edad == i){
            console.log("Hola soy: "+yazin+ " y tengo "+ num + " años");
        }
        
    }
    return num;
}

miEdad(30);




function opera(num1, num2) {
    var operacion;
    var op = prompt("Seleccione la operación: 1.suma 2.resta 3 multiplicación 4 división")
    num1 = parseInt(prompt("Ingrese un número por favor: "));
    num2 = parseInt(prompt("Ingresa otro número por favor: "));

    switch (op) {
        case "1":
            operacion = num1 + num2;
            break;
        case "2":
            operacion = num1 - num2;
            break;
        case "3":
            operacion = num1 * num2;
            break;
        case "4":
            operacion = num1 / num2;
            break;
        default:
        "Operacion no encontrada";  
    }
return operacion;
}

document.write("El resultado de la operacion es: "+opera()+ "<br>");



let edad = prompt("Ingrese su edad: ");
if (edad > 18){
    document.write("Usted es mayor de edad, porque tienes "+edad+ " años");
}
else{
    document.write("Usted es menor de edad, porque tienes "+edad+ " años");
}

