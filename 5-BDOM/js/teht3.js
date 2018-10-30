const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let i, html="", ul = document.getElementsByTagName('ul')[0];

ul.style="list-style-type: none;";

for (i=0;i<kuvat.length;i++){
  html += "<li><img src='"+kuvat[i]+"'></li>";
}

ul.innerHTML=html;




