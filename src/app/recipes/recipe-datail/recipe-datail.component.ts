import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.component.html',
  styleUrls: ['./recipe-datail.component.css']
})
export class RecipeDatailComponent implements OnInit {
  pageTitle: string = "Recipe Deatails";

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id =Number( this.route.snapshot.paramMap.get("id"));
    this.pageTitle += `: ${id}`;
  }

}
