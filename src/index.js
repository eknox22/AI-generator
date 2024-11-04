function generate(event) {
  event.preventDefault();

  let textBox = document.querySelector("#output");

  new Typewriter("#output", {
    strings: "Text will go here",
    autoStart: true,
    loop: false,
    delay: 1,
    cursor: "",
  });
}

let generatorFormElement = document.querySelector("#generator");
generatorFormElement.addEventListener("submit", generate);
