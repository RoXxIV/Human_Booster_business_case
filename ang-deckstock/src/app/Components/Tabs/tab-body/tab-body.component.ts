import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-body',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class TabBodyComponent implements OnInit {

  constructor() { }

  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  ngOnInit(): void {
  }

}
