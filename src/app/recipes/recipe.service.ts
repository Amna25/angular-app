import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeUrl : string = 'api/recipes/recipes.json'

  constructor(private http : HttpClientModule) { }

}
