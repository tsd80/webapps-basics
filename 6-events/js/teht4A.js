const pics = [
  {
    thumb: './img/small/100x100.jpg',
    big: './img/big/640x480-big.jpg',
  },
  {
    thumb: './img/small/1.jpg',
    big: './img/big/1-big.jpg',
  },
  {
    thumb: './img/small/tech.jpg',
    big: './img/big/tech-big.jpg',
  },
];


let i, thumbs = document.body,
    temp = thumbs.innerHTML;

thumbs.innerHTML="";

for (i=0; i<pics.length;i++){
  thumbs.innerHTML += "<img src='"+pics[i].thumb+"' onclick='changeimg("+i+")'>";
}

thumbs.innerHTML += temp;

function changeimg (id){
  let img = document.querySelector(".kuva img");
  img.src = pics[id].big;
  console.log(id);
  console.log(img);

}