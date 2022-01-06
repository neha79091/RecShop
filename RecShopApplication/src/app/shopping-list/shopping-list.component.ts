import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[new Ingredient('Apple',5),new Ingredient('Banana',6)]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(AddedIngredient:Ingredient)
  {
    this.ingredients.push(AddedIngredient);
  }
}
