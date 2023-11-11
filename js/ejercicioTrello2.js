const arrayValores = [];

filtrarValoresPares = filtrarValores => {
    
}

do{
    let valor = parseInt(prompt("Ingrese un valor: "));
    if(Number.isInteger(valor)){
        arrayValores.push(valor);
    }else{
        alert("Por favor ingrese un valor válido");
    }

}while(confirm("Desea seguir ingresando valores al array?"));

filtrarValoresPares(arrayValores);