import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemFavoriteComponent } from './stock-item-favorite.component';

describe('StockItemFavoriteComponent', () => {
  let component: StockItemFavoriteComponent;
  let fixture: ComponentFixture<StockItemFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
