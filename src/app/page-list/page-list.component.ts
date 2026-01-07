import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";
import { WikiPages } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  imports: [NgForOf],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages: WikiPages[] = [];
}


