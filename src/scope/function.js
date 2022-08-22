function greeting() {
    let userName = 'Estefa';
    console.log(userName);

    if (userName === 'Estefa') {
        console.log(`Hello ${userName}!`)
    }
}
greeting();

//entonces la variable userName puede ser usada dentro de a función y dentro de una función anidada.

console.log(userName);
//ReferenceError: userName is not defined.
