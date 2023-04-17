//04. If-Else

console.log('04. If-Else');

/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('-Exercise 04.a:');

var x= Math.random();

if (x>=0.5){
    alert('Greater than or equal to 0,5, the random number is: ' + x);
} else{
    alert('Lower than 0,5, the random number is: ' + x);
}

/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii “Anciano” si es mayor a 75 años.*/

console.log('-Exercise 04.b');

var age = Math.floor(Math.random()*100);

if(age<2){
    alert('Bebe');
} else if(age<13){
    alert('Niño');
} else if(age<20){
    alert('Adolescente');
} else if(age<31){
    alert('Joven');
} else if(age<61){
    alert('Adulto');
} else if(age<76){
    alert('Adulto mayor');
} else{
    alert('Anciano');
}