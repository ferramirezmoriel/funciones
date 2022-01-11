/*

alert ("Estoy vivo!!!");

console.log("Este es un mensaje para la consola");

var nombre = "Fernando";
var apellidos = "Ramírez Moriel";
var edad = 31;

console.log(nombre, apellidos, edad);

alert("Mi nombre es " + nombre);
console.log("Mis apellidos son: " + apellidos);

alert ("Mi nombre es: " + nombre + " ,mis apellidos son: " + apellidos + " y mi edad es: " +edad);

// otro ejemplo de  como mostrar variables en consola

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 - numero2;

console.log("el resultado de la suma es: " + resultado);

*/

//----------------------------------------------------------------------------------------------

//segunda parte de ejercicios
/*
function Saludar(){
    alert ("hola a todos");
}

Saludar();

//expresion de funcion

var Cantar = function(){
    alert ("a mi me gusta cantar");
}

Cantar ();

//funcion sin parametros
function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var sumar = numero1 + numero2;
    alert ("la suma de la funcion sin parametros es: " + sumar);
    
}

sumar();

//funcion con parametros
function restar (num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num2 - num1;
    alert ("La resta de la funcion con parametros es: " + resta);
}

restar();

//Otra funcion con parametros

function Cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado de un numero es: " + rescuadrado);
}

Cuadrado (4);

function Operaciones (num1, num2, num3, suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert ("La suma es: " + suma + ", la resta es: " + resta + " y la multiplicacion es: " + multi);
}

Operaciones(5,6,7);

*/

//ejercicios calcular area de un triangulo, circulo y rectangulo

//funcion con parametros area triangulo
/*
function rectangulo (baserec, alturarec){
    var resultadorec = baserec * alturarec;
    alert ("El área del rectangulo es: " + resultadorec);
    }

rectangulo (4,8)

// funcion con parametros triangulo

function triangulo (basetri,alturatri){
    var resultadotri = (basetri * alturatri) /2
    alert ("El área del triangulo es: " +resultadotri);
}

triangulo (3,6)

//funcion sin parametros circulo

function circulo (){
    var pi = 3.1416;
    var r = 5;
    var resultadocir = pi * (r*r);
    

    console.log("El área del circulo es: " + resultadocir);    
}

circulo();

*/

//funcion prompter
/*
function Prompter(){
    var respuesta = prompt("Buenos dias, cual es tu nombre?");
    alert ("Es un gusto saludarte " + respuesta);
}

Prompter();


function AreaCuadrado (){
    var datoingresado = prompt("Ingresa un numero");
    var resultado = datoingresado * datoingresado
    alert ("El area del cuadrado es: " + resultado + " por que el numero que ingresaste es: " + datoingresado);
}
AreaCuadrado();
*/

//---------------------------------------------------------------------------------------------

function confirmacion(){
    var pregunta = confirm("Desas visitar google.com y buscar fotos de perritos?")
    if (pregunta){
        alert("Te enviare rapidamente")
        window.location = "https:www.google.com";
    }
    else{
        alert ("No hay problema, nos vemos luego")
    }
}

//GetElementById

function cambiarColor(nuevoColor){
    var elem = document.getElementById ("parrafo");
    elem.style.color= nuevoColor;
}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}
