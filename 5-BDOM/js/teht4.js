const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let i, li, img, ul = document.getElementsByTagName('ul')[0];

ul.style="list-style-type: none;";

for (i=0;i<kuvat.length;i++){
  li = document.createElement('li');
  img = document.createElement('img');
  img.src = kuvat[i];
  img.alt = "Kissa nro "+i;
  li.appendChild(img);
  ul.appendChild(li);
}
