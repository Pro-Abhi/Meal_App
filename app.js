let inputText = document.querySelector(".inputClass");
let submitBtn = document.querySelector(".buttonClass");
let container = document.querySelector(".container");

submitBtn.addEventListener("click", () => {
  container.innerHTML = "";

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value}`
  )
    .then((result) => result.json())
    .then((data) => {
      let meals = data["meals"];
      // console.log(meals);

      meals.forEach((element) => {
        console.log(element);

        let result = `<div>
        <h1>${element["strMeal"]} </h1>
        <img src=${element["strMealThumb"]}>
        <p><span>Category</span> : ${element["strCategory"]}</p>
        <p><span>Origin</span> : ${element["strArea"]}</p>
        <p><span>Description</span> : ${element["strInstructions"]}</p>
        <p><a href=${element["strYoutube"]}>Watch Video</a></p>
        </div>`;

        container.innerHTML += result;
      });
    })
    .catch((err) => alert("error"));
});
