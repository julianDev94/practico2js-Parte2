const valor = parseInt(prompt("Ingrese un valor para conocer su tabla: "));

tablaMultiplicar = (valorMultiplicar) => {
  document.write(`<table id="tablaMultiplicar">
                    <tbody>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`<tr>
                        <td>${valorMultiplicar} x ${i} = </td>
                        <td>${valorMultiplicar * i}</td>
                        </tr>`);
  }
  document.write(`</tbody>
                    </table>`);
};

if (Number.isInteger(valor)) {
    tablaMultiplicar(valor);
}
