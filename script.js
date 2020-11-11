function equal() {

  // if(!calc.txt.value) return;
  
  try {
    const display = document.getElementById('equation').value;
    let equation = '';
    display.split("").map(i=>{
      switch(i) {
        case 'π':
          return equation +='*3.14159265'
          case 'x²':
            return equation +='ˆ2'
        default:
        return equation +=i
      }
    }) 

    console.log(equation)

    document.getElementById('equation').value = eval(equation);
  } catch{
    return document.getElementById('equation').value = 'Erro de sintaxe'
  }
}

function point() {
  return document.getElementById('equation').value += '.';
}

function twoZeros() {
  return document.getElementById('equation').value += '00';
}

function zero() {
  return document.getElementById('equation').value += '0';
}

function one() {
  return document.getElementById('equation').value += '1';
}

function two() {
  return document.getElementById('equation').value += '2';
}

function three() {
  return document.getElementById('equation').value += '3';
}

function four() {
  return document.getElementById('equation').value += '4';
}

function five() {
  return document.getElementById('equation').value += '5';
}

function six() {
  return document.getElementById('equation').value += '6';
}

function seven() {
  return document.getElementById('equation').value += '7';
}

function eight() {
  return document.getElementById('equation').value += '8';
}

function nine() {
  return document.getElementById('equation').value += '9';
}

function sum() {
  return document.getElementById('equation').value += '+';
}

function subtraction() {
  return document.getElementById('equation').value += '-';
}

function multiplication() {
  return document.getElementById('equation').value += '*';
}

function division() {
  return document.getElementById('equation').value += '/';
}

function clearImput() {
  return document.getElementById('equation').value = '';
}

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: sin()
function sin() {
  document.getElementById('equation').value = Math.sin(document.getElementById('equation').value);
}
//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: cos()
function cos() {
  document.getElementById('equation').value = Math.cos(document.getElementById('equation').value);
}

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: tan()
function tan() {
  document.getElementById('equation').value = Math.tan(document.getElementById('equation').value);
}

//ToDo - dar uma olhada melhor no código, pois na calculadora científica do 
//google aparece assim: log()
function log() {
  document.getElementById('equation').value = Math.log10(document.getElementById('equation').value);
}


function show(content) {
  if (document.getElementById('equation').value.localeCompare("undefined") == 0) {
    console.log('aqui');
    document.getElementById('equation').value = content; 
  } else {
    console.log('aqui2');
    document.getElementById('equation').value += content;
  }
}

function pi() {
  // if (document.getElementById('equation').value == 0)
  //     document.getElementById('equation').value = Math.PI;
  // else
    document.getElementById('equation').value = document.getElementById('equation').value += 'π'; 
}

//ToDo - o fatorial está funcionando, porém no google e em outras calculadora 
//científicas o fatorial aparece: numero!
function factorial() {
  let x = document.getElementById('equation').value;
  if (x == 0 || x == 1)
      document.getElementById('equation').value = 1;
  else {
      let fact = 1;
      for (i = 2; i <= x; i++) {
          fact = fact * i;
      }
      document.getElementById('equation').value = fact;
  }
}

function squareRoot() {
  document.getElementById('equation').value = Math.sqrt(document.getElementById('equation').value);
}

function exponential() {
  if (document.getElementById('equation').value == 0)
    document.getElementById('equation').value = Math.E;
  else
    document.getElementById('equation').value = document.getElementById('equation').value * Math.E;
}

//ToDo - coloquei x ao quadrado, porém na calculadora do google
// ela eleva o valor ao número que o usuário informa.
function squared() {
  // document.getElementById('equation').value = Math.pow(document.getElementById('equation').value, 2);
  return document.getElementById('equation').value += '²'
}

//ToDo - arrumar a função de porcentagem, uma outra forma para fazer
function percentage(){
  document.getElementById('equation').value = document.getElementById('equation').value / 100;
}

// ToDo - pensar na lógica para fazer essa função.
// function memoryAns(){
//   document.calc.txt.value += ans;
// }