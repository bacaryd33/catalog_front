import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductswallComponent } from './productswall.component';

describe('ProductswallComponent', () => {
  let component: ProductswallComponent;
  let fixture: ComponentFixture<ProductswallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductswallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductswallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
