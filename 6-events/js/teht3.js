const num1 = document.querySelector('input[name=numero1]');
const num2 = document.querySelector('input[name=numero2]');
const plus = document.getElementById('sum');
const minus = document.getElementById('sub');
const times = document.getElementById('multi');
const divide = document.getElementById('div');
const calc1 = document.getElementById('calc1');
const calc2 = document.getElementById('calc2');
const fromsting = document.getElementById('sentence');

//Four calculations
function plusf(in1, in2) {
  calculus(in1, in2, "+");
}

function minusf(in1, in2) {
  calculus(in1, in2, "-");
}

function multif(in1, in2) {
  calculus(in1, in2, "*")
}

function dividef(in1, in2) {
  calculus(in1, in2, "/")
}

//calculation itself
function calculus(in1, in2, act) {
  let t1, t2, valuef;
  if (typeof in1 === 'number') {t1 = in1;} else {t1 = +num1.value; fromsting.value = t1;}
  if (typeof in2 === 'number') {t2 = in2;} else {t2 = +num2.value; fromsting.value = fromsting.value + act + t2}
  num1.value = t1;
  num2.value = t2;
  switch (act) {
    case "+":
      valuef = t1 + t2;
      break;
    case "-":
      valuef = t1 - t2;
      break;
    case "*":
      valuef = t1 * t2;
      break;
    case "/":
      valuef = t1 / t2;
      break;
  }

  document.getElementById('vastaus').innerText = t1+act+t2+" = "+valuef;
}


//proceccing dropdown menu
function dropdown (){
  const what = document.getElementById('inputdrop').value;

  switch (what) {
    case "sum":
      plusf();
      break;
    case "sub":
      minusf();
      break;
    case "multi":
      multif();
      break;
    case "div":
      dividef();
      break;
  }
}


//parcing flat input
function parce (){
  let split;
  const sent = fromsting.value;

  if (sent.includes('+')) {
    split = sent.split('+');
    plusf(+split[0], +split[1]);
  }
  if (sent.includes('-')){
    split = sent.split('-');
    minusf(+split[0], +split[1]);
  }
  if (sent.includes('*')){
    split = sent.split('*');
    multif(+split[0], +split[1]);
  }
  if (sent.includes('/')){
    split = sent.split('/');
    dividef(+split[0], +split[1]);
  }
}


//Adding events of clicks
plus.addEventListener('click',plusf);
minus.addEventListener('click',minusf);
times.addEventListener('click',multif);
divide.addEventListener('click',dividef);
calc1.addEventListener('click', dropdown);
calc2.addEventListener('click', parce);




