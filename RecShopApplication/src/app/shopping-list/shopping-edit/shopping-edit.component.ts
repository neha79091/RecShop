import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient()
  {
    const intIngredientName=this.nameInput.nativeElement.value;
    const intIngredientAmount=this.amountInput.nativeElement.value;
    const newIngredient=new Ingredient(intIngredientName,intIngredientAmount);
    this.IngredientAdded.emit(newIngredient)

  }

}
