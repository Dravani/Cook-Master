import { Component } from '@angular/core';

@Component({
  selector: 'app-spoon',
  templateUrl: './spoon.component.html',
  styleUrls: ['./spoon.component.css']
})
export class SpoonComponent {

}

import { HttpClient } from '@angular/common/http';

export class RecipeService {
  constructor(private http: HttpClient) {}

  searchRecipes(input: string) {
    const url = `http://localhost:8000/api/recipe?q=${input}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
    });
  }
}