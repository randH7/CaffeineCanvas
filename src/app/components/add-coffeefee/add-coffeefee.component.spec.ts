import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffeefeeComponent } from './add-coffeefee.component';

describe('AddCoffeefeeComponent', () => {
  let component: AddCoffeefeeComponent;
  let fixture: ComponentFixture<AddCoffeefeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoffeefeeComponent]
    });
    fixture = TestBed.createComponent(AddCoffeefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
