import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNormiCijenaComponent } from './tabela-normi-cijena.component';

describe('TabelaNormiCijenaComponent', () => {
  let component: TabelaNormiCijenaComponent;
  let fixture: ComponentFixture<TabelaNormiCijenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNormiCijenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaNormiCijenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
