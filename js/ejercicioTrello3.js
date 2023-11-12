const temperaturaC = parseInt(prompt("Ingrese la temperatura a convertir: "));
let temperaturaF = 0;

const convertirTemperatura = celcius =>{
    return ((celcius * 9/5)+32);
} 


if(Number.isInteger(temperaturaC)){
  temperaturaF = convertirTemperatura(temperaturaC);
}else{
    alert("Por favor ingrese un valor válido");
}

document.write(`<p class="text-center text-warning fs-1">Grados Celcius ${temperaturaC} </p>`);
document.write(`<p class="text-center text-success fs-1">Grados Farenheit ${temperaturaF} </p>`);
