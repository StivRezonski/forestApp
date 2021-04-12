import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdlukaUsvajanjeComponent } from './odluka-usvajanje.component';

describe('OdlukaUsvajanjeComponent', () => {
  let component: OdlukaUsvajanjeComponent;
  let fixture: ComponentFixture<OdlukaUsvajanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdlukaUsvajanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdlukaUsvajanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
