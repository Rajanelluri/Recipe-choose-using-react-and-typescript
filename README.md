# Recipe Book (React + TypeScript)

A simple Recipe Book web app built with **React**, **TypeScript**, and **React Router**.  
It displays recipes, supports search, lets users add/remove favorites, and shows recipe details.

---

## Features

- **Home page (`/`)**
  - Displays all recipes from `src/data.ts`
  - **Search** recipes by name (case-insensitive)
  - If no match: shows **"No recipes match your search."**
- **Favorites page (`/favorites`)**
  - Shows only favorited recipes
  - If none: shows **"No favorites yet!"**
- **Recipe details (`/recipe/:id`)**
  - Shows recipe name, ingredients, and instructions
  - Back to recipes link
- **Favorite toggle**
  - Button switches between **Add to Favorites** / **Remove from Favorites**
  - Works on both Home and Favorites pages

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router

---

## Project Structure

```txt
recipe-book/
├─ index.html
├─ package.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ data.ts
   ├─ types.ts
   └─ components/
      ├─ RecipeList.tsx
      ├─ RecipeCard.tsx
      ├─ Favorites.tsx
      └─ RecipeDetails.tsx
Routes
Route	Page
/	Home (all recipes + search)
/favorites	Favorites list
/recipe/:id	Recipe details

Getting Started (Local Setup)
1) Clone the repo
bash
Copy code
git clone <your-repo-url>
cd recipe-book
2) Install dependencies
bash
Copy code
npm install
3) Run in development mode
bash
Copy code
npm run dev
Open the URL shown in the terminal (usually):

http://localhost:5173
output images:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/505bd399-0198-4f7d-af28-c0b33ab9c059" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/c2d708d0-99dd-4c89-a83c-1450101da025" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/89640494-6773-4b5c-a3fb-c23100e9e9eb" />
search filter:
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/0c1d19f3-07b5-498e-bce7-05f8faa06fe3" />
