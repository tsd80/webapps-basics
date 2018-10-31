const img = document.getElementById('kuva');

function over() {
  document.getElementsByTagName('p')[0].setAttribute('class','disp');
}

function away(){
  document.getElementsByTagName('p')[0].setAttribute('class','nondisp');
}

img.addEventListener('mouseenter',over);
img.addEventListener('mouseleave',away);
