document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  bulidTodo(e.target.description.value)
  form.reset()
})
}); 
function bulidTodo(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", handelDelete)
  btn.textContent ="delete"
  btn.style.color = "red"
  btn.style.fontSize = "10px"
  p.style.fontSize = "20px"
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
}
function handelDelete(e){
  e.target.parentNode.remove()
}

