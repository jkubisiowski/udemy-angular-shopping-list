import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a simple recipe",
      "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Another test recipe",
      "This is a simple recipe",
      "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  getRecipe(id:number) {
    return this.recipes[id]
  }
}
