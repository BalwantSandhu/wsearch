import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-page-list',
  imports: [NgForOf],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages: WikiPages[] = [];
}

export interface WikiPages{
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
}
