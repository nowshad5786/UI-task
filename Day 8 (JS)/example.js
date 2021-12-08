var cont = document.getElementById("exp");
var button = document.getElementById("btn");
button.addEventListener("click", function () {
  console.log("hello all");
});
console.log(cont);
var container = document.getElementsByClassName("example");
var but = document.getElementById("button");
but.addEventListener("click", function () {
  console.log("Good morning");
});
console.log(container);
var con = document.getElementsByName("forexample");
var butt = document.getElementById("butexp");
butt.addEventListener("click", function () {
  console.log("Good Evening");
});
console.log(con);
var tagg = document.getElementsByTagName("p");
var neww = document.getElementById("tag");
neww.addEventListener("click", function () {
  console.log("Welcome you all");
});
console.log(tagg);
