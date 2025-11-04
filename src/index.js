function displayRecipe(response) {
  // Format the response text
  const recipe = response.data.answer;
  const formattedRecipe = recipe
    .split('\n')
    .map(line => {
      // If it's the first line (title), make it bold and centered
      if (line === recipe.split('\n')[0]) {
        return `<h3 style="text-align: center">${line}</h3>`;
      }
      return `<p>${line}</p>`;
    })
    .join('');

  new Typewriter("#recipe", {
    strings: formattedRecipe,
    autoStart: true,
    delay: 1,
    cursor: "",
    html: true
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#user-instructions");

  let apiKey = "6a4bo439f4518f900acccae6f3t294be";
  let prompt = `Display the best pizza recipe based on ${instructionsInputElement.value}`;
  let context =
    "You know about all the pizza in the world. Give me the best pizza recipe with the main ingredient typed by the user. Include a title for the recipe. Format: Start with the title, then ingredients list, then step by step instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeEl = document.querySelector("#recipe");
  recipeEl.classList.remove("hidden");
  recipeEl.innerHTML = `<div class="generating"> ⏳ Generating an amazing pizza recipe featuring ${instructionsInputElement.value} just for you ❤️...</div>`;

  

  axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#form");
recipeElement.addEventListener("submit", generateRecipe);
