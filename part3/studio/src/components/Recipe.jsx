import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink =
    "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/";
  let authorPhoto =
    "https://joyfoodsunshine.com/wp-content/uploads/2024/06/2024-family-photo-scaled.jpg";
  let authorName = "Laura";

  return (
    <div>
      <img
        src={authorPhoto}
        alt="Laura"
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>The Best Chocolate Chip Cookie Recipe Ever</a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "salted butter",
    "sugar",
    "vanilla extract",
    "eggs",
    "chocolate chips",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>The Best Chocolate Chip Cookie Recipe Ever</h1>
        <p>
          This is the best chocolate chip cookies recipe ever! No funny
          ingredients, no chilling time, etc. Just a simple, straightforward,
          amazingly delicious, doughy yet still fully cooked, chocolate chip
          cookie that turns out perfectly every single time!{" "}
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg"
      alt="cockies"
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
