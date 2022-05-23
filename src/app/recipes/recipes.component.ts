import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

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

  get listFilter(){
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    console.log("value is " + value);
    this.filteredRecipes = this.provideFilterRecipes(value);
  }

  filteredRecipes: IRecipe[] = [];
  recipes : IRecipe[] = [];
  

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;
  }

  provideFilterRecipes(filterBy : string): IRecipe[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe : IRecipe) => 
      recipe.recipeName.toLocaleLowerCase().includes(filterBy));
  }

}
