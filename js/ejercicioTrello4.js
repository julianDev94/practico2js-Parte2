const valor = parseInt(
  prompt("Ingrese un valor para conocer sus numeros primos: ")
);

const conocerPrimos = (valorUsuario) => {
  const arrayPrimos = [];

  for (let i = 1; i <= valorUsuario; i++) {
    if (valorUsuario % i == 0) {
      arrayPrimos.push(i);
    }
  }

  if (arrayPrimos.length == 2) {
    document.write(
      `<p class="text-center text-success fs-1">El valor ${valorUsuario} es un número primo </p>`
    );
    document.write(
      `<p class="text-center text-primary fs-1">Sus divisores son: <br>${arrayPrimos}</p>`
    );
  } else {
    document.write(
      `<p class="text-center text-warning fs-1">El valor ${valorUsuario} no es un número primo</p>`
    );
  }
};

if (Number.isInteger(valor)) {
  conocerPrimos(valor);
} else {
  alert("Por favor ingrese un valor válido");
}
