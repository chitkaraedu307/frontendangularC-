import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaHome } from './pizza-home';

describe('PizzaHome', () => {
  let component: PizzaHome;
  let fixture: ComponentFixture<PizzaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
