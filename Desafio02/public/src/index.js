function obtenerPosicionX(...numeros) {
  for (let i = 0; i < numeros.length; i++) {
    let pos = numeros[i].indexOf("x");
    if (pos !== -1) {
      return { indiceNumero: i, posicion: pos };
    }
  }
  return null;
}
function restaSinNegativos(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return a >= b ? a - b : b - a;
}
function calcularX(indice, posicion, n1, n2, n3) {
  let resultado;

  switch (indice) {
    case 0: 
      resultado = restaSinNegativos(n2[posicion], n3[posicion]);
      if (resultado > 9) resultado = resultado % 10;
      return "El valor de x en el primer número es " + resultado;

    case 1: 
      resultado = restaSinNegativos(n1[posicion], n3[posicion]);
      if (resultado > 9) resultado = resultado % 10;
      return "El valor de x en el segundo número es " + resultado;

    case 2: 
      resultado = parseInt(n1[posicion]) + parseInt(n2[posicion]);
      if (resultado > 9) resultado = resultado % 10;
      return "El valor de x en el tercer número es " + resultado;
  }
}


function solucion() {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let numero3 = document.getElementById("numero3").value;

  let posicionX = obtenerPosicionX(numero1, numero2, numero3);
  let salida = "";

  if (posicionX) {
    let { indiceNumero, posicion } = posicionX;
    salida = calcularX(indiceNumero, posicion, numero1, numero2, numero3);
  } else {
    salida = "No se encontró la letra 'x' en ninguno de los números.";
  }

  document.getElementById("resultado").innerText = salida;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", solucion);
});
