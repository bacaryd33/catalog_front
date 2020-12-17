import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerdocComponent } from './swaggerdoc.component';

describe('SwaggerdocComponent', () => {
  let component: SwaggerdocComponent;
  let fixture: ComponentFixture<SwaggerdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaggerdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
