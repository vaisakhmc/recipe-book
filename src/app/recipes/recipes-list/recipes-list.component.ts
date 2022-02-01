import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe, } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrsjIFGXFVUgyveqhj1kdORTBoR5iwSwAjw&usqp=CAU'),
    new Recipe('A test recipe 2', 'This is a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrsjIFGXFVUgyveqhj1kdORTBoR5iwSwAjw&usqp=CAU')

  ]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
