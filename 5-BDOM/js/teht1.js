//Adding own info
document.getElementsByTagName('td')[0].innerText='Dmitri';
document.getElementsByTagName('td')[1].innerText='Omasukunimi';
document.getElementsByTagName('td')[2].innerText='ts';
document.getElementsByTagName('td')[3].innerText='Omaosoitekatu 3';

// adding phone number

var th = document.createElement('th');
th.innerText = "Puhelinnumero";

var heads = document.getElementsByTagName("tr")[0];
heads.appendChild(th);

var td = document.createElement('td');
td.innerHTML = "040 1231313";

var cont = document.getElementsByTagName("tr")[1];
cont.appendChild(td);

// removing nickname

heads.removeChild(heads.children[2]);
cont.removeChild(cont.children[2]);