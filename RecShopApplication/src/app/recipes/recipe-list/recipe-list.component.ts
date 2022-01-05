import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe','we are testing this item','https://www.holidify.com/images/cmsuploads/compressed/IndianStreetFood_20190103000803.jpg'),
    new Recipe('A test recipe','we are testing this item','https://www.holidify.com/images/cmsuploads/compressed/IndianStreetFood_20190103000803.jpg')
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
