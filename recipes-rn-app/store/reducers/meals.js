import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
  test: "hot dog!",
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.id
      ); //state provided as a variable by Redux
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedPrefs = action.filters;
      const updatedfilteredMeals = state.meals.filter((meal) => {
        if (appliedPrefs.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedPrefs.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedPrefs.vegetarian && !meal.isVegetairan) {
          return false;
        }
        if (appliedPrefs.lactosFree && !meal.isLactosFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedfilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
