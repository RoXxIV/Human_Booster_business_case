import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  styleUrls: ['./tabs.component.scss'],
  template: `
  <div class="tabsComponent row">
    <div class="tabs-header col-4">
      <div
        class="tab-label my-2"
        (click)="selectTab(item)"
        [class.active]="activeTab === item"
        *ngFor="let item of tabItems$ | async"
      >
        <ng-container *ngIf="item.labelComponent">
          <ng-container *ngTemplateOutlet="item.labelComponent.labelContent">
          </ng-container>
        </ng-container>
        <ng-container *ngIf="!item.labelComponent">
          {{ item.label }}
        </ng-container>
      </div>
    </div>
    <div class="tabs-body col-8">
      <ng-container *ngIf="activeTab && activeTab.bodyComponent">
        <ng-container *ngTemplateOutlet="activeTab.bodyComponent.bodyContent">
        </ng-container>
      </ng-container>
    </div>
</div>
  `
})
export class TabsComponent implements OnInit {

  constructor() { }

  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  tabItems$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked(): void {
    // choose the default tab
    // we need to wait for a next VM turn,
    // because Tab item content, will not be initialized yet
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent): void {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }

}
