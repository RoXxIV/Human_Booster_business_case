import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../../Models/advert';

@Component({
  selector: '[app-article-card]',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  @Input() advert: Advert;

  ngOnInit(): void {
  }

}
