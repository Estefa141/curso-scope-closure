function fruits() {
    if (true) {
        var fruit1 = 'Apple';//-->function
        let fruit2 = 'Kiwi'; //Reference error-->block
        const fruit3 = 'Banana'; //Se apagó el programa en el 2-->block
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

function fruits() {
    if (true) {
        var fruit1 = 'Apple';//-->function
        let fruit2 = 'Kiwi'; //Reference error-->block
        const fruit3 = 'Banana'; //Se apagó el programa en el 2-->block
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);

}
fruits();
 // De la segunda manera sí da normal porque se metió en el mismo bloque.
  //Se muestra en un orden diferente por el orden del llamado.
