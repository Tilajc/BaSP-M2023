//01. Variables y Operadores

console.log('01.Variables and Operators');

/* a. Crear dos variables numéricas y utilizar el operador suma
para guardar el valor de la suma de ambos números en una 3er variable.*/

console.log('01.a:');

var n1= 10;
var n2= 20;
var addition=n1+n2;

console.log(n1, '+', n2, '=', addition);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('01.b:');

var str1 = 'hello';
var str2 = ' world';
var str3 = str1+str2;

console.log(str1 + str2, '=', str3);

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length)*/

console.log('01.c:');

var str4 = 'first string';
var str5 = 'second string';
var size = str4.length+str5.length;
console.log(str4, str5, 'cantidad de letras', size);