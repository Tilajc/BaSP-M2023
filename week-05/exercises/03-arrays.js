//03. Arrays

console.log('03. Arrays');

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('-Exercise 03.a:');

var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('el quinto mes es: ' + month[4] + '. el onceavo mes es: ' + month[10] + '.');

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 03.b:');

month.sort();

console.log('Los meses ordenados alfabeticamente son: ', month);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 03.c:');

month.unshift('nuevo mes inicial');
month.push('nuevo mes final');

console.log(month);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 03.d:');

month.shift();
month.pop();

console.log(month);

// e. Invertir el orden del array (utilizar reverse).

console.log('-Exercise 03.e:');

month.reverse();

console.log(month);

/* f. Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join).*/

console.log('-Exercise 03.f:');

console.log(month.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 03.g:');

var monthCopy = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(monthCopy.slice(monthCopy.indexOf('Mayo'), monthCopy.indexOf('Noviembre')+1));