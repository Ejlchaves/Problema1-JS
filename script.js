let plata = parseFloat(prompt("Ingrese aqui su dinero disponible"));


// palito de agua $0.6 ,  palito de crema $1 , bombon helado $1.6, bombon chocolate $1.7, Bombon banado $1.8, pote de 1/4 $2.9.

//Roberto: $1.5 , Pedro: $1.7, Juan: $3

/* let palitoAgua = parseFloat(0.6);
let palitoCrema = parseInt (1);
let bombonHelado = parseFloat (1.6);
let bombonChocolate = parseFloat (1.7);
let bombonBanado = parseFloat (1.8);
let poteHelado = parseFloat (2.9);

let vuelto1 = plata - 0.6;
let vuelto2 = plata - 1;
let vuelto3 = plata - 1.6;
let vuelto4 = plata - 1.7;
let vuelto5 = plata - 1.8;
let vuelto6 = plata - 2.9; */


if (plata < 0.6) {

    alert("No puedes comprar helado");

} else
    if (0.6 <= plata && plata < 1) {

    alert("Puedes comprar un palito de agua y tu vuelto es " + (plata - 0.6));

} else 
    if (1 <= plata && plata < 1.6) {

    alert("Puedes comprar un palito de crema y tu vuelto es " + (plata - 1));

} else 
    if (1.6 <= plata && plata< 1.7) {

    alert("Puedes comprar un bombon helado y tu vuelto es " + (plata - 1.6));

} else 
    if (1.7 <= plata && plata < 1.8) {
        
    alert("Puedes comprar un bombon de chocolate y tu vuelto es " + (plata - 1.7));

} else 
    if (1.8 <= plata && plata < 2.9) {
        
    alert("Puedes comprar un bombon bañado y tu vuelto es " + (plata - 1.8));

} else 
    if (plata >= 2.9) {
    
    alert("Puedes comprar un pote de 1/4 de helado y tu vuelto es " + (plata - 2.9));

    }
