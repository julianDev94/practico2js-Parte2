const arregloValores = [];
let mayorValor = 0;

valorMayorArreglo = arregloMayor =>{
    let mayor = 0
    for(let i = 0; i < arregloMayor.length ; i++){
        if(arregloMayor[i] > mayor){
            mayor = arregloMayor[i];
        }
    }
    return mayor;
}

do{

    let valor = parseInt(prompt("Ingrese un valor: "));
    if(Number.isInteger(valor)){
        arregloValores.push(valor);
    }else{
        alert("El valor ingresado no es numero, por favor ingrese un valor numérico");        
    }
    

}while(confirm("Desea seguir agregando valores al arreglo?"));

mayorValor = valorMayorArreglo(arregloValores);
document.write(`<p class="text-center text-success fs-1"> ${arregloValores} <br></p`);
document.write(`<p class="text-center text-success fs-1">El mayor valor existente en el array es ${mayorValor}</p>`);