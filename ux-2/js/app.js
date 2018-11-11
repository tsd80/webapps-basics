let num_1 = document.getElementById('berry'),
    num_2 = document.querySelector('li[data-foodtype=squishy]'),
    num_3 = document.getElementsByTagName('li'),
    num_4 = document.querySelectorAll('li');

out(1);
// Task 1
console.log(num_1.outerHTML);
console.log(`I found the berry: ${num_1.innerText}`);
num_1.style.backgroundColor = "red";

out(2);
// Task 2
console.log(num_2.outerHTML);
console.log(`I found the fruit: ${num_2.innerText}`);
num_2.style.backgroundColor ="orange";

out(3);
//Task 3
console.log(num_3);
console.log("Using the for loop here:");
for (let i=0;i<num_3.length;i++){
  console.log(num_3[i].innerText);
  if (num_3[i].innerText==="Pear"){
    num_3[i].style.backgroundColor="green";
  }
  num_3[i].style.width="100px";
  num_3[i].style.listStyleType="none";
}

out(4);
//Task 4
console.log(num_4);
console.log("Using forEach here:");
num_4.forEach((item) => {
  item.style.border="1px solid #333333";
  console.log(item.innerText);
});

function out(num) {
  console.log(`\nTask ${num}`);
}