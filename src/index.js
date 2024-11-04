function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    loop: false,
    delay: 1,
    cursor: "",
  });
}

function generate(event) {
  event.preventDefault();

  let insutrctionsInput = document.querySelector("#user-instructions");

  let apiKey = "t61a3de96178c340b47o7ff32962bb7f";
  let context =
    "You are an expert at sharing motivational and inspirational quotes. Please generate a short inspirational quote in basic HTML and separate each line with a <br/>. Be polite and make sure to follow the user instructions. Do not include a title. At the end of the poem sign the poem with 'SheCodes AI' inside a <strong> element. ";

  let prompt = `User instructions: Generate a motivational quote about ${insutrctionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let generatorFormElement = document.querySelector("#generator");
generatorFormElement.addEventListener("submit", generate);
