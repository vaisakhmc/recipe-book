import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipie[] = [
    new Recipie('A test recipie','This is a test recipie','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrsjIFGXFVUgyveqhj1kdORTBoR5iwSwAjw&usqp=CAU'),
    new Recipie('A test recipie','This is a test recipie','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrsjIFGXFVUgyveqhj1kdORTBoR5iwSwAjw&usqp=CAU')

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
