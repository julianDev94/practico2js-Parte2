const valor = parseInt(
  prompt("Ingrese un valor para conocer sus numeros primos: ")
);

const conocerPrimos = (valorUsuario) => {
  const arrayPrimos = [];
  for (let i = 1; i <= valorUsuario; i++) {
    if (valorUsuario % i == 0) {
      arrayPrimos.push(i);
    }else{
        document.write(`El valor ${valorUsuario} no es un numero primo`);
    }
  }
  document.write(
    `<p class="text-center text-secondary">Numeros primos <br>${arrayPrimos}</p>`
  );
};

if (Number.isInteger(valor)) {
  conocerPrimos(valor);
} else {
  alert("Por favor ingrese un valor válido");
}
