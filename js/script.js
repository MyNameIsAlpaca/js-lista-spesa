let numero = prompt("Scrivi un numero di 4 cifre");

while (numero.length != 4) {
    
    numero = prompt("Ti ho detto di 4 cifre")

}

console.log(parseInt(numero.charAt(0)) + parseInt(numero.charAt(1)) + parseInt(numero.charAt(2)) + parseInt(numero.charAt(3)));


