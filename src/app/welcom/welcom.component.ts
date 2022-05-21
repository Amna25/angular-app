import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {
  public pageTitle = "Find Your Favourite Recipe";

  constructor() { }

  ngOnInit(): void {
  }

}
