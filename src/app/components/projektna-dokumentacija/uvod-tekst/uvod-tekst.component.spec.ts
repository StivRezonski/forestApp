import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvodTekstComponent } from './uvod-tekst.component';

describe('UvodTekstComponent', () => {
  let component: UvodTekstComponent;
  let fixture: ComponentFixture<UvodTekstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvodTekstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvodTekstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
