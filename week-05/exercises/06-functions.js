//06. Funciones

console.log('06. Functions');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

console.log('06.a:');

var a=10;
var b=30.5;

function addition(x,y){
    return console.log(x+y);
}

addition(a,b);

/*b. Copiar la función suma anterior y agregarle una validación para controlar
si alguno de los parámetros no es un número; de no ser un número,
mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('06.b:');

function verifiedAddition(x,y){
    if ((typeof(x)=='number') && (typeof(y)=='number')){
        return console.log(x+y);
    } else{
        alert('Un parametro tiene un error');
        return console.log(NaN);
    }
}

verifiedAddition(a,b);

/*c. Crear una función “validateInteger” que reciba un número
como parámetro y devuelva verdadero si es un número entero.*/

console.log('06.c:');

var c = 1.35;

function validateInteger(x){
    return x%1 == 0;
}

console.log(validateInteger(c));

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert
con el error y retornar el número convertido a entero (redondeado).*/

console.log('06.d:');

function newVerifiedAddition(x,y){
    if (!(validateInteger(x))){
        alert('el valor: ' + x + ' no es entero');
        x=Math.round(x);
    }

    if (!(validateInteger(y))){
        alert('el valor: ' + y + ' no es entero');
        y=Math.round(y);
    }

    if ((typeof(x)=='number') && (typeof(y)=='number')){
        return console.log('La suma realizada redondeando los numeros es = ', x+y);
    } else{
        alert('Un parametro tiene un error');
        return console.log(NaN);
    }
}

newVerifiedAddition(a,b);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('06.e:');

function validateInteger2(x,y){
    return (validateInteger(x) && validateInteger(y));
}

console.log('test de resultado de validateinteger2', validateInteger2(a,b));

function validateNumber(x){
    return typeof(x)=='number';
}

function newVerifiedAddition2(x,y){
    if (!(validateInteger2(x,y))){
        alert('el valor: ' + x + ' o, el valor: '+ y + ' no es entero');
        x=Math.round(x);
        y=Math.round(y);
    }

    if ((validateNumber(x)) && (validateNumber(y))){
        var z = ('La suma realizada redondeando los numeros es = ' + (x+y));
        console.log(typeof(z));
        return console.log(z);
    } else{
        alert('Un parametro tiene un error');
        return console.log(NaN);
    }
}

console.log(newVerifiedAddition2(a,b));