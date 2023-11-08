const ciudades = [];
// let modificacionUltimaCiudad;
do{
    let ciudad = prompt("Ingrese el nombre de la ciudad");
    ciudades.push(ciudad);
}while(confirm("Desea seguir ingresando ciudades?"));
document.write(`<p id="longitudArrayCiudad"> El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
document.write(`<ul>
                <li>Elemento 1er posicion: ${ciudades[0]}</li>
                <li>Elemento 3er posicion: ${ciudades[2]}</li>
                <li>Elemento ultima posicion: ${ciudades[ciudades.length-1]}</li>
                </ul>`);
ciudades.push('París');
document.write(`<p>Elemento ultima posicion: ${ciudades[ciudades.length-1]} </p>`);
document.write(`Elemento de la segunda posición: ${ciudades[1]}`);
ciudades.splice(1,0,'Barcelona');
document.write('<h2 id="tituloArregloCiudades">Arreglo de ciudades</h2>');
document.write(`<ul>`);
for(let i = 0 ; i < ciudades.length ; i++){
    document.write(`<li>Elemento: ${ciudades[i]}</li>`);
}
document.write(`</ul>`);

