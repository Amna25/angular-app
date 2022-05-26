import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IRecipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeUrl : string = 'api/recipes/recipes.json'

  constructor( private http : HttpClient) { }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.recipeUrl).pipe(
      tap(data => (console.log("All: " + JSON.stringify(data)))),
      err => err
    );
  }

}
