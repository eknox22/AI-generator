function generate(event) {
  event.preventDefault();

  alert("Generating");
}

let generatorFormElement = document.querySelector("#generator");
generatorFormElement.addEventListener("submit", generate);
