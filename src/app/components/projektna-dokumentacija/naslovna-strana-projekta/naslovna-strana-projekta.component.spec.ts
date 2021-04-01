import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaslovnaStranaProjektaComponent } from './naslovna-strana-projekta.component';

describe('NaslovnaStranaProjektaComponent', () => {
  let component: NaslovnaStranaProjektaComponent;
  let fixture: ComponentFixture<NaslovnaStranaProjektaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaslovnaStranaProjektaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaslovnaStranaProjektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
