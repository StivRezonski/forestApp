import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraktorComponent } from './traktor.component';

describe('TraktorComponent', () => {
  let component: TraktorComponent;
  let fixture: ComponentFixture<TraktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
