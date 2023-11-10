let valor = 0;
let mensajeParImpar = '';

//EJEMPLO DE FUNCION DECLARATIVA
function mostrarParImpar(valorParImpar){
    if(valorParImpar % 2 === 0){
        return 'par';
    }else{
        return 'impar';
    }
}

//EJEMPLO DE FUNCION FLECHA
// const mostrarParImpar = valorParImpar => {
//     if(valorParImpar % 2 === 0){
//         return 'par';
//     }else{
//         return 'impar';
//     }
// }

valor = parseInt(prompt("Ingrese un valor: "));
if(Number.isInteger(valor) && valor > 0){
    mensajeParImpar = mostrarParImpar(valor);
    document.write(`<p class="text-center text-primary fs-1">El valor ingresado es ${mensajeParImpar}</p>`);
}else{
    document.write(`<p class="text-center text-primary fs-1">El valor ingresado no es un numero valido</p>`);
}

