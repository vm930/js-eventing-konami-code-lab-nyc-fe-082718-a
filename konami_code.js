
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

init();

function init() {
  // Write your JavaScript code inside the init() function
document.body.addEventListener("keydown", keydownHandler)
}

function keydownHandler(event) {
  let key = parseInt(event.which);
  if (key === code[index] && index === code.length -1) {
    alert("hurray!");
    index = 0;
  } 
  if (kxey === code[index] && index !== code.length-1) {
    index++
  }else if (key !== code[index]) {
    index = 0;
  }
}
