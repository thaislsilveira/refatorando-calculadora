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

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: sin()
function sin() {
  document.calc.txt.value = Math.sin(document.calc.txt.value);
}
//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: cos()
function cos() {
  document.calc.txt.value = Math.cos(document.calc.txt.value);
}

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: tan()
function tan() {
  document.calc.txt.value = Math.tan(document.calc.txt.value);
}

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: log()
function log() {
  document.calc.txt.value = Math.log10(document.calc.txt.value);
}


function show(content) {
  if (document.calc.txt.value.localeCompare("undefined") == 0)
    document.calc.txt.value = content;
  else
    document.calc.txt.value += content;
}

function pi() {
  if (document.calc.txt.value == 0)
      document.calc.txt.value = Math.PI;
  else
    document.calc.txt.value = document.calc.txt.value * Math.PI;
}

//ToDo - o fatorial está funcionando, porém no google e em outras calculadora 
//científicas o fatorial aparece: numero!
function factorial() {
  let x = document.calc.txt.value;
  if (x == 0 || x == 1)
      document.calc.txt.value = 1;
  else {
      let fact = 1;
      for (i = 2; i <= x; i++) {
          fact = fact * i;
      }
      document.calc.txt.value = fact;
  }
}

function squareRoot() {
  document.calc.txt.value = Math.sqrt(document.calc.txt.value);
}

function exponential() {
  if (document.calc.txt.value == 0)
    document.calc.txt.value = Math.E;
  else
    document.calc.txt.value = document.calc.txt.value * Math.E;
}

//ToDo - coloquei x ao quadrado, porém na calculadora do google
// ela eleva o valor ao número que o usuário informa.
function squared() {
  document.calc.txt.value = Math.pow(document.calc.txt.value, 2);
}

//ToDo - arrumar a função de porcentagem, uma outra forma para fazer
function percentage(){
  document.calc.txt.value = document.calc.txt.value / 100;
}

// ToDo - pensar na lógica para fazer essa função.
function memoryAns(){
  document.calc.txt.value += ans;
}