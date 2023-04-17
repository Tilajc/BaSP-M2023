//02. Strings

console.log('02. Strings');

/*a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('-Exercise 02.a:');

var str1 = 'primer string de al menos 10 caracteres';

console.log(str1.toUpperCase());

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 02.b:');

var str2 = 'segundo string de al menos 10 caracteres';

console.log('Los primeros cinco caracteres del string son: ', str2.substring(0,5));

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 02.c:');

var str3 = 'tercer string de al menos 10 caracteres';

console.log('los ultimos tres caracteres del string son: ', str3.substring((str3.length-3),str3.length));

/*d. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 02.d:');

var str4 = 'cuarto string de al menos 10 caractereS';
var dResult = str4.substring(0,1).toUpperCase() + str4.substring(1,str4.length-1) +
str4.substring(str4.length-1,str4.length).toLowerCase();

console.log(dResult);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 02.e:');

var str5 = 'quinto string de al menos 10 caractereS';
var eResult = str5.indexOf(' ');

console.log(eResult);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar
un nuevo string que tenga la primera letra de ambas palabras en mayúscula
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 02.f:');

var str6 = 'dEsOxIrRiBoNuClEiCo eLeCtRoEnCeFaLoGrAfIsTa';
var fResult =(str6.substring(0,1).toUpperCase() + str6.substring(1,str6.indexOf(' ')).toLowerCase() +
str6.substring(str6.indexOf(' '), str6.indexOf(' ')+2).toUpperCase() +
str6.substring(str6.indexOf(' ')+2, str6.length).toLowerCase());

console.log(fResult);