import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditComponent } from './shopping-list-edit.component';

describe('ShoppingListEditComponent', () => {
  let component: ShoppingListEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
