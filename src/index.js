function displayQuote(response) {
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    loop: false,
    delay: 1,
    cursor: "",
  });
}

//Generate the quote
function generate(event) {
  event.preventDefault();

  let insutrctionsInput = document.querySelector("#user-instructions");

  let apiKey = "t61a3de96178c340b47o7ff32962bb7f";
  let context =
    "You are an expert at sharing motivational and inspirational quotes. Please generate a short inspirational quote in basic HTML using the <p> element and separate each line with a <br/>. Be polite and make sure to follow the user instructions. Do not include a title. At the end of the poem sign the poem with 'SheCodes AI' inside a <strong> element. Do NOT have the word html in this. ";

  let prompt = `User instructions: Generate a motivational quote about ${insutrctionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //Hide the output and add a generating message
  let quoteElement = document.querySelector("#output");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating inspirational quote about ${insutrctionsInput.value} </div>`;

  axios.get(apiUrl).then(displayQuote);
}

//Call the form
let generatorFormElement = document.querySelector("#generator");
generatorFormElement.addEventListener("submit", generate);
