import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDatailComponent } from './recipe-datail.component';

describe('RecipeDatailComponent', () => {
  let component: RecipeDatailComponent;
  let fixture: ComponentFixture<RecipeDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
