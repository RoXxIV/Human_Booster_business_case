import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkateshopComponent } from './add-skateshop.component';

describe('AddSkateshopComponent', () => {
  let component: AddSkateshopComponent;
  let fixture: ComponentFixture<AddSkateshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkateshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkateshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
