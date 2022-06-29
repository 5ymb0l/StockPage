import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemCartComponent } from './stock-item-cart.component';

describe('StockItemCartComponent', () => {
  let component: StockItemCartComponent;
  let fixture: ComponentFixture<StockItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
