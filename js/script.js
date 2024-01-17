const title = document.querySelector("h1");
const btnGreet = document.querySelector("button");

title.addEventListener("click", () => {
  title.textContent = "Hello Everyone";
});

function greet(name) {
  name = prompt("Type your name");
  if (!name) {
    title.textContent = "Hello Name";
    return;
  } else {
    title.textContent = `Hello ${name}`;
  }
}

btnGreet.addEventListener("click", greet);
