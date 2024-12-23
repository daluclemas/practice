console.log(5);

const input = document.querySelector("input");
const btn = document.querySelector("button");
const display = document.querySelector(".display");
btn.addEventListener("click", ()=>{
  display.innerHTML = input.value
})