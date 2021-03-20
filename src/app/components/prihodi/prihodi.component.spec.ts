import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihodiComponent } from './prihodi.component';

describe('PrihodiComponent', () => {
  let component: PrihodiComponent;
  let fixture: ComponentFixture<PrihodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrihodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrihodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
