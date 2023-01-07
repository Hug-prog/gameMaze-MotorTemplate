// // call php
// function callPHP(params, url) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     console.log("ok ok pass");
//   };
//   xhttp.open("POST", "./?action=" + url);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhttp.send(params);
// }

// // end game
// function endGame(id, health) {
//   callPHP(`id=${id}&health=${health}`, "healthPlayer");
// }

// random number generator
function RandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function main(infoPlayer) {
  const script_typed = document.createElement("script");
  script_typed.type = "module";
  script_typed.src = "http://127.0.0.1:5173/main.js";
  document.head.appendChild(script_typed);

  return;
}
