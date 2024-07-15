function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Margherit Pizza",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeElement = document.querySelector("#form");
recipeElement.addEventListener("submit", generateRecipe);
