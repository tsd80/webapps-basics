'use strict';

function search(){

  //catching value of search field and process it
  let what = document.getElementById('hakuteksti').value;
  fetch('http://api.tvmaze.com/search/shows?q='+what)
  .then(function(answer){return answer.json();})
  .then(function(json){show_shows(json);})
  .catch(function(error){console.log(error);});
}

function show_shows(input) {
  let genre="", body = document.getElementById('shows');

  //cleaning HTML to output new results
  body.innerHTML="";

  //API return 10 search results, we need 9 due to design
  for (let i = 0; i<input.length-1;i++){
    let img,
        name = input[i].show.name,
        url = input[i].show.url,
        summary = input[i].show.summary,
        genres = input[i].show.genres,
        div = document.createElement('div'),
        link = document.createElement('a'),
        imgs = document.createElement('img'),
        summ = document.createElement('div'),
        gen = document.createElement('div'),
        header = document.createElement('h1');

    //if no images in API
    if (input[i].show.image) {img = input[i].show.image.medium;}
    else {img = "./img/nopic.png";}
    //console.log(input[i].show.image);

    //count all the genres in
    for (let j=0; j<genres.length;j++){
      if (j===0) {genre = genres[j]}
      else {genre = genre + ", "+ genres[j];}
    }

    //sending info to console
    console.log(name+" "+url+" "+genre);

    //forming header
    header.innerText = name;

    //forming image
    imgs.src = img;

    //forming link including image
    link.href = url;
    link.appendChild(header);
    link.appendChild(imgs);
    link.target = '_blank';

    //forming summary
    summ.innerHTML = summary;
    summ.classList.add('summary');

    //forming genres
    gen.innerText = "Genre: " + genre;
    gen.classList.add('genre');

    //forming single card of film
    div.classList.add('single');
    div.appendChild(link);
    div.appendChild(summ);
    div.appendChild(gen);

    //adding single show to body
    body.appendChild(div);
  }
}

const button = document.getElementById('search_button');
button.addEventListener('click', search);

const input = document.getElementById('hakuteksti');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    button.click();
  }
});