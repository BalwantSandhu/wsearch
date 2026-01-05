import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent, WikiPages } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, PageListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pages: WikiPages[] = [];

  constructor(private wikipedia:WikipediaService){

  }

  onTerm(term:string){
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    })
  }
} 
