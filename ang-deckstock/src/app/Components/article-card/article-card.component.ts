import { Component, Input, OnInit } from '@angular/core';
import { fadeInUpOnEnterAnimation, lightSpeedInAnimation } from 'angular-animations';
import { Advert } from '../../Models/advert';

@Component({
  selector: '[app-article-card]',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
  ]
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  @Input() advert: Advert;
  rubberState = true;
  animOnInit: boolean;

  ngOnInit(): void {
    this.animOnInit = true;
  }

}
