const button = document.getElementById("calc-price");

button.addEventListener("click", function(){
let name = document.getElementById("name").value;
let km = document.getElementById("km").value;
let age = document.getElementById("age").value;
console.log(name,km,age);
})