import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortimentiComponent } from './sortimenti.component';

describe('SortimentiComponent', () => {
  let component: SortimentiComponent;
  let fixture: ComponentFixture<SortimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortimentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
