import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a simple recipe",
      "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg"
    ),
    new Recipe(
      "Another test recipe",
      "This is a simple recipe",
      "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg"
    )
  ];

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array
  }


}
