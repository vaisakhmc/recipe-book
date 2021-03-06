import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>()
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value

    const newIngredient = new Ingredient(ingName, ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }
}
