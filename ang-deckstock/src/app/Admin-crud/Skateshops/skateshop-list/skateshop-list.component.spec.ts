import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateshopListComponent } from './skateshop-list.component';

describe('SkateshopListComponent', () => {
  let component: SkateshopListComponent;
  let fixture: ComponentFixture<SkateshopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateshopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
