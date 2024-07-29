//function split own method
// debemos crear uma function que depende de los parametros string y separador
//la funcion funciona de la siguiente manera, en cuanto no se encuentra el separador agregamos cada
//caractere a un acumulador para formar una string, cuando se encuentra el separador hacemos con que la string formada
// sea o siguiente elemento del nuevo array que se va formando.
debugger;
function splitString(string, separador) {
  let holder = [];
  let agregarString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === separador) {
      if (agregarString.length > 0) {
        let arrayTemporal = holder;
        holder = [];

        for (let j = 0; j < arrayTemporal.length; j++) {
          holder[j] = arrayTemporal[j];
        }
        holder[holder.length] = agregarString;
        agregarString = "";
      }
    } else {
      agregarString += string[i];
    }
  }
  if (agregarString.length > 0) {
    let arrayTemporal = holder;
    holder = [];

    for (let j = 0; j < arrayTemporal.length; j++) {
      holder[j] = arrayTemporal[j];
    }
    holder[holder.length] = agregarString;
    agregarString = "";
  }
  return holder;
}

const result1 = splitString("apple,banana,orange", ",");
console.assert(
  result1[0] === "apple" && result1[1] === "banana" && result1[2] === "orange",
  {
    result: result1,
    message: "Test 1 No superado",
  }
);

const result2 = splitString(",Inicio,medio,fin,", ",");
console.assert(
  result2[0] === "Inicio" &&
    result2[1] === "medio" &&
    result2[2] === "fin" &&
    result2.length === 3,
  {
    result: result2,
    message: "Test 2 no superado",
  }
);

const result3 = splitString("sinSeparadores ni nada por el estilo", ",");
console.assert(
  result3[0] === "sinSeparadores ni nada por el estilo" && result3.length === 1,
  {
    result: result3,
    message: "Test 3 no superado",
  }
);
