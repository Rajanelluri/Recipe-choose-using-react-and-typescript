import React from "react";
import { Link, useParams } from "react-router-dom";
import recipes from "../data";

const RecipeDetails: React.FC = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="layout-column align-items-center" data-testid="recipe-details">
        <h3>Recipe not found</h3>
        <Link to="/">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="layout-column align-items-center" data-testid="recipe-details">
      <h3>{recipe.name}</h3>

      <h4 className="my-0">Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h4 className="mb-0">Instructions:</h4>
      <p>{recipe.instructions}</p>

      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
