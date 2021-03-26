import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatSlucajnihComponent } from './projekat-slucajnih.component';

describe('ProjekatSlucajnihComponent', () => {
  let component: ProjekatSlucajnihComponent;
  let fixture: ComponentFixture<ProjekatSlucajnihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekatSlucajnihComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekatSlucajnihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
