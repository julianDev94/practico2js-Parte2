let cadenaTexto = prompt("Ingrese la cadena: ");

function informacionCadena(cadena){
    if(cadena == cadena.toUpperCase()){
        document.write(`<p class="text-center text-primary fs-1">La cadena ingresada contiene solo mayúscula</p>`);
    }else if(cadena == cadena.toLowerCase()){
        document.write(`<p class="text-center text-danger fs-1">La cadena ingresada contiene solo minúsculas</p>`);
    }else{
        document.write(`<p class="text-center text-secondary fs-1">La cadena ingresada contiene mayúsculas y minúsculas</p>`);
    }
}

informacionCadena(cadenaTexto);

