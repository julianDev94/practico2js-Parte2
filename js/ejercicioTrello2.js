const arrayValores = [];

const filtrarValoresPares = arrayfiltrarValores => {
    const arrayPares = arrayfiltrarValores.filter((indice) => indice % 2 == 0);
    return arrayPares;
}

do{
    let valor = parseInt(prompt("Ingrese un valor: "));
    if(Number.isInteger(valor)){
        arrayValores.push(valor);
    }else{
        alert("Por favor ingrese un valor válido");
    }

}while(confirm("Desea seguir ingresando valores al array?"));

document.write(`<p class="text-center text-success fs-1">Array con valores<br> ${arrayValores} </p>`);
const valoresPares = filtrarValoresPares(arrayValores);
document.write(`<p class="text-center text-success fs-1">Array con valores pares<br> ${valoresPares} </p>`);