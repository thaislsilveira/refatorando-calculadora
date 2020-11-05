function equal() {

  // if(!calc.txt.value) return;

  try {
    document.calc.txt.value = eval(calc.txt.value);
  } catch{
    return document.calc.txt.value = 'Erro de sintaxe'
  }
}

function point() {
  return document.calc.txt.value += '.';
}

function twoZeros() {
  return document.calc.txt.value += '00';
}

function zero() {
  return document.calc.txt.value += '0';
}

function one() {
  return document.calc.txt.value += '1';
}

function two() {
  return document.calc.txt.value += '2';
}

function three() {
  return document.calc.txt.value += '3';
}

function four() {
  return document.calc.txt.value += '4';
}

function five() {
  return document.calc.txt.value += '5';
}

function six() {
  return document.calc.txt.value += '6';
}

function seven() {
  return document.calc.txt.value += '7';
}

function eight() {
  return document.calc.txt.value += '8';
}

function nine() {
  return document.calc.txt.value += '9';
}

function sum() {
  return document.calc.txt.value += '+';
}

function subtraction() {
  return document.calc.txt.value += '-';
}

function multiplication() {
  return document.calc.txt.value += '*';
}

function division() {
  return document.calc.txt.value += '/';
}

function clearImput() {
  return document.calc.txt.value = '';
}

// function sin() {
//   document.calc.txt.value = Math.sin(document.calc.txt.value);
// }

// function cos() {
//   document.calc.txt.value = Math.cos(document.calc.txt.value);
// }

// function tan() {
//   document.calc.txt.value = Math.tan(document.calc.txt.value);
// }

// function log() {
//   document.calc.txt.value = Math.log10(document.calc.txt.value);
// }

// function ln() {
//   document.calc.txt.value = Math.log(document.calc.txt.value);
// }

// function parenteseEsquerdo() {
//   document.calc.txt.value = Math.log(document.calc.txt.value);
// }

// function parenteseDireito() {
//   document.calc.txt.value = Math.log(document.calc.txt.value);
// }