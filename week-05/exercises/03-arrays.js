//03. Arrays

console.log('03. Arrays');

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('03.a:');

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('el mes 5 es: ' + meses[4] + '. el mes 11 es: ' + meses[10] + '.');

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('03.b:');

meses.sort();

console.log('Los meses ordenados alfabeticamente son: ', meses);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('03.c:');

meses.unshift('nuevo mes inicial');
meses.push('nuevo mes final');

console.log(meses);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('03.d:');

meses.shift();
meses.pop();

console.log(meses);

// e. Invertir el orden del array (utilizar reverse).

console.log('03.e:');

meses.reverse();

console.log(meses);

/* f. Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join).*/

console.log('03.f:');

console.log(meses.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('03.g:');

var mesesCopia = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(mesesCopia.slice(mesesCopia.indexOf('Mayo'), mesesCopia.indexOf('Noviembre')+1));