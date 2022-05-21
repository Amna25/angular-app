import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeTitle : string = 'Recipe List';
  recipes : IRecipe[] = [
    {
      recipeId: 1,
      recipeName: "pasta",
      recipeDescription: "pasta with tomato sauce,chicken and herbs",
      ingredients: "pasta, chicken, tomato sauce, Cheese",
      recipeOrigin: "Italian",
      imageUrl: "assets/images/pasta.png"
  },
  {
      recipeId: 2,
      recipeName: "Fish And Chips",
      recipeDescription: "Bread coated fish with fried chips and sauce",
      ingredients: "Cod Fish Fillet, bread crumbs, potatoes",
      recipeOrigin: "British",
      imageUrl: "assets/images/chip.png"
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
