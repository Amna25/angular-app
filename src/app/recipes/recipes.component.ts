import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeTitle : string = 'Recipe List';
  imageWidth : number = 50;
  margin : number = 2;
  private _listFilter : string= '';

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    console.log("value is" + value);
    this.filteredRecipes = this.provideFilterRecipes(value);
  }

  filteredRecipes: IRecipe[] = [];
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

  provideFilterRecipes(filterBy : string): IRecipe[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe : IRecipe) => 
      recipe.recipeName.toLocaleLowerCase().includes(filterBy))
  }

}
