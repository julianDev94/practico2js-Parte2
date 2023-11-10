let dadoUno = 0;
let dadoDos = 0;
const sumaDados = [];
const apariciones = [];
let aparicionDos = 0;
let aparicionTres = 0;
let aparicionCuatro = 0;
let aparicionCinco = 0;
let aparicionSeis = 0;
let aparicionSiete = 0;
let aparicionOcho = 0;
let aparicionNueve = 0;
let aparicionDiez = 0;
let aparicionOnce = 0;
let aparicionDoce = 0;

function numeroRandom(){
    return Math.floor((Math.random()*6)+1);
}

for(let i = 0; i < 50; i++){
    dadoUno = numeroRandom();
    dadoDos = numeroRandom();
    sumaDados.push(dadoUno + dadoDos);
}
// console.log(sumaDados);
console.log(sumaDados.sort());
for(let i = 0; i<sumaDados.length;i++){
    if(sumaDados[i] == 2){
        aparicionDos++;
    }
    if(sumaDados[i] == 3){
        aparicionTres++
    }
    if(sumaDados[i] == 4){
        aparicionCuatro++
    }
    if(sumaDados[i] == 5){
        aparicionCinco++
    }
    if(sumaDados[i] == 6){
        aparicionSeis++
    }
    if(sumaDados[i] == 7){
        aparicionSiete++
    }
    if(sumaDados[i] == 8){
        aparicionOcho++
    }
    if(sumaDados[i] == 9){
        aparicionNueve++
    }
    if(sumaDados[i] == 10){
        aparicionDiez++
    }
    if(sumaDados[i] == 11){
        aparicionOnce++
    }
    if(sumaDados[i] == 12){
        aparicionDoce++
    }
}
apariciones.push(aparicionDos,aparicionTres,aparicionCuatro,aparicionCinco,aparicionSeis,aparicionSiete, aparicionOcho, aparicionNueve, aparicionDiez, aparicionOnce, aparicionDoce);
console.log(apariciones);

document.write(`<table>`);
document.write(`<thead>
                <tr>
                <th>Suma</th>
                <th>Apariciones</th>
                </tr>
                </thead>`);
document.write(`<tbody>`);
for(let i = 2; i <= 12;i++){
    document.write(`<tr>`);
    document.write(`<td>${i}</td>`);
    document.write(`<td>${apariciones[i-2]}</td>`);
    document.write(`</tr>`);
}
document.write(`</tbody>`);
document.write(`</table>`);