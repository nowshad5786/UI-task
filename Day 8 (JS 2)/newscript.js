var a = 300;
var b = 200;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;

var cal = document.getElementById("cal");
var add = document.getElementById("add");
add.addEventListener("click", function () {
  console.log(c);
});
var sub = document.getElementById("sub");
sub.addEventListener("click", function () {
  console.log(d);
});
var mul = document.getElementById("mul");
mul.addEventListener("click", function () {
  console.log(e);
});
var div = document.getElementById("div");
div.addEventListener("click", function () {
  console.log(f);
});
console.log(cal);
