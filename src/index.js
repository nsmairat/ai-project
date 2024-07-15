function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#user-instructions");

  let apiKey = "6a4bo439f4518f900acccae6f3t294be";
  let prompt = `Display the best pizza recipe based on ${instructionsInputElement.value}`;
  let context =
    "You know about all the pizza in the world and I would like for you to display the best pizza recipe with the main ingredient typed by the user in the input, please. Also, I would like for you to add a title for the recipe you choose , please";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating pizza recipe...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#form");
recipeElement.addEventListener("submit", generateRecipe);
