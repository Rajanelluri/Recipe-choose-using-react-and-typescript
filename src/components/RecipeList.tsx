import React, { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../types";



interface RecipeListProps {
  recipes: Recipe[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, favoriteIds, onToggleFavorite }) => {
  const [query, setQuery] = useState("");

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const filteredRecipes = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipes;
    return recipes.filter((r) => r.name.toLowerCase().includes(q));
  }, [query, recipes]);

  return (
    <div className="recipe-list-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={onSearch}
        className="search-input"
        data-testid="search-input"
      />

      <div className="recipe-list" data-testid="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favoriteIds.includes(recipe.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="text-center" data-testid="no-recipes-message">
          No recipes match your search.
        </p>
      )}
    </div>
  );
};

export default RecipeList;
