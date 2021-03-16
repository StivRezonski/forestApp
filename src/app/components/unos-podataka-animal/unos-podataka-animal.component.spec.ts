import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosPodatakaAnimalComponent } from './unos-podataka-animal.component';

describe('UnosPodatakaAnimalComponent', () => {
  let component: UnosPodatakaAnimalComponent;
  let fixture: ComponentFixture<UnosPodatakaAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosPodatakaAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosPodatakaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
