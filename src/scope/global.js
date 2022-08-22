var a; //declarando
var b = 'b'; //declara / asigna
b = 'bb'; //reasignación
var a = 'aa' //redeclaración

//Global Scope
var fruit = 'Apple'; //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}
bestFruit();

//A pesar de que la siguiente variable se asignó dentro de una función, no se declaró, entonces es global.
function countries() {
    country = 'Colombia'; //
    console.log(country);
}

countries();
console.log(country);

