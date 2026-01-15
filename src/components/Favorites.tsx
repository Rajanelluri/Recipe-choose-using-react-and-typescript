import React from "react";
import type { Recipe } from "../types";

import RecipeCard from "./RecipeCard";

interface FavoritesProps {
  favorites: Recipe[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, favoriteIds, onToggleFavorite }) => {
  if (favorites.length === 0) {
    return (
      <p className="text-center" data-testid="no-favorites">
        No favorites yet!
      </p>
    );
  }

  return (
    <div className="recipe-list" data-testid="favorites-list">
      {favorites.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favoriteIds.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
