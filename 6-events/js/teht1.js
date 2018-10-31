const button = document.getElementById('nappi');

button.addEventListener('click', function(evt) {
  alert("You've pressed a button "+evt.target);
});