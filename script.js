function equal() {
  
  try {
    const display = document.getElementById('equation').value;
    let equation = '';
    display.split("").map((i, index) => {
      if (i ==='π' && index ===0) return equation += Math.PI;
  
      switch(i) {
        case 'π':
          return equation += `*Math.PI`;
        default:
        return equation +=i;
      }
    }) 

    document.getElementById('equation').value = eval(equation);
  } catch{
    return document.getElementById('equation').value = 'Erro de sintaxe';
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

function sin() {
  document.getElementById('equation').value = Math.sin(document.getElementById('equation').value);
}


function cos() {
  document.getElementById('equation').value = Math.cos(document.getElementById('equation').value);
}

function tan() {
  document.getElementById('equation').value = Math.tan(document.getElementById('equation').value);
}

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

    document.getElementById('equation').value = document.getElementById('equation').value += 'π'; 
}

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

function squared() {
  
  document.getElementById('equation').value = Math.pow(document.getElementById('equation').value, 2);
  // return document.getElementById('equation').value += 'x²'
}

function percentage(){
  document.getElementById('equation').value = document.getElementById('equation').value / 100;
}
