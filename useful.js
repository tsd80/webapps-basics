// getting random int from min to max
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

//Fibonacci calculation in recursive function
function fib(n) {
  if (n <= 2){
    return 1
  }
  return fib(n - 1) + fib (n - 2)
}