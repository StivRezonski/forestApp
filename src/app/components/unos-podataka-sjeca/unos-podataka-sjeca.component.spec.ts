import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosPodatakaSjecaComponent } from './unos-podataka-sjeca.component';

describe('UnosPodatakaSjecaComponent', () => {
  let component: UnosPodatakaSjecaComponent;
  let fixture: ComponentFixture<UnosPodatakaSjecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosPodatakaSjecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosPodatakaSjecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
