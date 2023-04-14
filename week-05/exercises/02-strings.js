//02. Strings

console.log('02. Strings');

/*a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('02.a:');

var str1 = 'string de al menos 10 caracteres';

console.log(str1.toUpperCase());

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('02.b:');

var str2 = 'string dos de al menos 10 caracteres';

console.log('Las primeras cinco letras del string son: ', str2.substring(0,5));

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('02.c:');

var str3 = 'string tres de al menos 10 caracteres';

console.log('las ultimas tres letras del string son: ', str3.substring((str3.length-3),str3.length));

/*d. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('02.d:');

var str4 = 'string cuatro de al menos 10 caractereS';
var dResult = str4.substring(0,1).toUpperCase() + str4.substring(1,str4.length-1) +
str4.substring(str4.length-1,str4.length).toLowerCase();

console.log(dResult);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('02.e:');

var str5 = 'string cinco de al menos 10 caracteres';
var eResult = str5.indexOf(' ');

console.log(eResult);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar
un nuevo string que tenga la primera letra de ambas palabras en mayúscula
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('02.f:');

var str6 = 'dEsOxIrRiBoNuClEiCo eLeCtRoEnCeFaLoGrAfIsTa';
var fResult =(str6.substring(0,1).toUpperCase() + str6.substring(1,str6.indexOf(' ')).toLowerCase() +
str6.substring(str6.indexOf(' '), str6.indexOf(' ')+2).toUpperCase() +
str6.substring(str6.indexOf(' ')+2, str6.length).toLowerCase());

console.log(fResult);