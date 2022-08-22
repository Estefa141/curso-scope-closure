var firstName; //Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; //declarar/asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David';//declarando/asignando
var secondName = 'Ana'; //reasignación y redeclaración
console.log(secondName);

//Let
let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar

let fruit = 'Banana'; ❌//con let ya no puedo re declarar!

//Const
const animal = 'Dog'; //declara y asigna
animal = 'cat'; //reasignada
console.log(animal);❌//no se puede reasignar, menos redeclarar.

//con objetos y arrays
const vehicles = [];
vehicles.push("😁");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
//esto no reasigna ni redeclara, entonces funcionan los métodos.


