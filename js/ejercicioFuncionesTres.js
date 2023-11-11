let base = parseInt(prompt("Ingrese la base del rectangulo: "));
let altura = parseInt(prompt("Ingrese la altura del rectangulo: "));

calcularPerimetro = (baseRec, alturaRec) => {
    document.write(`<p class="text-center text-success fs-1">El perimetro del rectangulo es: ${2*(baseRec + alturaRec)}</p>`);
}

if(Number.isInteger(base) && Number.isInteger(altura)){
    calcularPerimetro(base,altura);
}else{
    document.write(`<p class="text-center text-success fs-1">Los valores ingresados no son números</p>`);
}