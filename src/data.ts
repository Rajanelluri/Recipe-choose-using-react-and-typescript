import { Recipe } from "./types";

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Guanciale", "Black pepper"],
    instructions:
      "Cook spaghetti. In a separate bowl, mix eggs and cheese. Combine with pasta.",
  },
  {
    id: 2,
    name: "Caprese Salad",
    description: "A fresh salad with tomatoes, mozzarella, and basil.",
    ingredients: ["Tomatoes", "Mozzarella cheese", "Fresh basil", "Olive oil", "Balsamic vinegar"],
    instructions: "Layer tomatoes and mozzarella, sprinkle basil, drizzle olive oil.",
  },
  {
    id: 3,
    name: "Chicken Tikka Masala",
    description: "A creamy and spicy Indian dish.",
    ingredients: ["Chicken", "Yogurt", "Tomato puree", "Spices", "Cream"],
    instructions: "Marinate chicken, grill it, simmer in spiced tomato-cream sauce.",
  },
];

export default recipes;
