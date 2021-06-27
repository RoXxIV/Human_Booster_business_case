import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.scss']
})
export class BanniereComponent implements OnInit {

  constructor() { }

  // svf localisation
  @Input() localisation: string;

  ngOnInit(): void {
  }

}
