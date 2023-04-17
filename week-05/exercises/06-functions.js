//06. Funciones

console.log('06. Functions');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 06.a:');

function addition(x,y){
    return console.log(x+y);
}

addition(4,6);

/*b. Copiar la función suma anterior y agregarle una validación para controlar
si alguno de los parámetros no es un número; de no ser un número,
mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 06.b:');

function verifiedAddition(x,y){
    if (typeof(x) && typeof(y) == 'number'){
        return console.log(x+y);
    } else{
        alert('Uno de los parámetros tiene error');
        return console.log(NaN);
    }
}

verifiedAddition(4,2);
verifiedAddition(4,'2');

/*c. Crear una función “validateInteger” que reciba un número
como parámetro y devuelva verdadero si es un número entero.*/

console.log('-Exercise 06.c:');

function validateInteger(x){
    return x%1 == 0;
}

console.log(validateInteger(0));
console.log(validateInteger(1.35));

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert
con el error y retornar el número convertido a entero (redondeado).*/

console.log('-Exercise 06.d:');

function newVerifiedAddition(x,y){
    if (typeof(x) && typeof(y) == 'number'){
        if (!(validateInteger(x))){
            alert('el numero: ' + x + ' no es entero');
            x=Math.round(x);
        }
        if (!(validateInteger(y))){
            alert('el numero: ' + y + ' no es entero');
            y=Math.round(y);
        }
        return console.log('la suma de los numeros redondeados es= ' + (x+y));
    } else{
        alert('Uno de los parámetros tiene error');
        return console.log(NaN);
    }
}

newVerifiedAddition(4,3.5);
newVerifiedAddition(4,'3.5');

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('-Exercise 06.e:');

function validateInteger2(x,y){
    return (validateInteger(x) && validateInteger(y));
}

function validateNumber(x,y){
    return (typeof(x) && typeof(y) == 'number');
}

function newVerifiedAddition2(x,y){
    if (validateNumber(x,y)){
        if (!(validateInteger2(x,y))){
            alert('el valor: ' + x + ' o, el valor: ' + y + ' no es entero');
            x=Math.round(x);
            y=Math.round(y);
        }
        return console.log('la suma de los numeros redondeados es= ' + (x+y));
    } else{
        alert('Uno de los parámetros tiene error');
        return console.log(NaN);
    }
}

newVerifiedAddition2(4,3.5);
newVerifiedAddition2(4,'3.5');