import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import recipes from "./data";
import type { Recipe } from "./types";


import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";
import RecipeDetails from "./components/RecipeDetails";

const App: React.FC = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const favoriteRecipes: Recipe[] = useMemo(
    () => recipes.filter((r) => favoriteIds.includes(r.id)),
    [favoriteIds]
  );

  return (
    <BrowserRouter>
      <nav className="layout-row justify-content-center my-16" data-testid="navbar">
        <div className="layout-row align-items-center" style={{ gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<RecipeList recipes={recipes} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favoriteRecipes} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
