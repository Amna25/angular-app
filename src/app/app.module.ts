import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WelcomComponent } from './welcom/welcom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDatailComponent } from './recipes/recipe-datail/recipe-datail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    WelcomComponent,
    RecipeDatailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "recipes" ,component: RecipesComponent},
      {path: "recipes/:id", component: RecipeDatailComponent},
      {path:"welcome" ,  component: WelcomComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
