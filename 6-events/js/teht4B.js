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

let i, x, thumbs = document.body;

for (i=pics.length-1; i>=0;i--) {
  (function (){
    let tmp = i;
    x = document.createElement('img');
    x.src = pics[i].thumb;
    x. addEventListener("click",
        function() {
          console.log(tmp);
          let img = document.querySelector(".kuva img");
          img.src = pics[tmp].big;
        });
    thumbs.insertBefore(x, thumbs.firstChild);
  })();
}


function changeimg(id) {
  console.log("changeimg + "+id);
  let img = document.querySelector(".kuva img");
  img.src = pics[id].big;
}


