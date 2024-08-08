console.log("hello");

let btnHide = document.getElementById("hide");
let btnShow = document.getElementById("show");
console.log(btnShow);

btnHide.addEventListener("click", function () {
  let targetDiv = document.getElementById("Uche");
  targetDiv.style.visibility = "hidden";
});

btnShow.addEventListener("click", function () {
  let targetDiv = document.getElementById("Uche");
  targetDiv.style.display = "block";
});
