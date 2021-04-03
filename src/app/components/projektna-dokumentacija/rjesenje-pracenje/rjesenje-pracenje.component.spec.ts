import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjesenjePracenjeComponent } from './rjesenje-pracenje.component';

describe('RjesenjePracenjeComponent', () => {
  let component: RjesenjePracenjeComponent;
  let fixture: ComponentFixture<RjesenjePracenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RjesenjePracenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RjesenjePracenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
