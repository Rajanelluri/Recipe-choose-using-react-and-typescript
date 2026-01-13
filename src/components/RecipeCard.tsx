import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from ".,/types";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isFavorite, onToggleFavorite }) => {
  return (
    <div className="recipe-card layout-column justify-content-between" data-testid="recipe-card">
      <h4 className="my-0">{recipe.name}</h4>
      <p>{recipe.description}</p>

      <div className="layout-row align-items-center" style={{ gap: 16 }}>
        <button onClick={() => onToggleFavorite(recipe.id)}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
