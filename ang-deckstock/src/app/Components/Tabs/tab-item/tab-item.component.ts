import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  selector: 'app-tab-item',
  template: '<ng-content></ng-content>',
})
export class TabItemComponent implements OnInit {

  constructor() { }

  @Input()
  label: string;

  @Input()
  isActive: boolean;

  @ContentChild(TabBodyComponent)
  bodyComponent: TabBodyComponent;

  @ContentChild(TabLabelComponent)
  labelComponent: TabLabelComponent;

  ngOnInit(): void {
  }

}
