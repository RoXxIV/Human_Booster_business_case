import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-label',
  template: '<ng-template><ng-content></ng-content></ng-template>',
})
export class TabLabelComponent implements OnInit {

  constructor() { }

  @ViewChild(TemplateRef)
  labelContent: TemplateRef<any>;

  ngOnInit(): void {
  }

}
