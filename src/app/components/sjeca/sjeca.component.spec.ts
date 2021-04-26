import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjecaComponent } from './sjeca.component';

describe('SjecaComponent', () => {
  let component: SjecaComponent;
  let fixture: ComponentFixture<SjecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SjecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SjecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
