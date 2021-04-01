import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektnaDokumentacijaComponent } from './projektna-dokumentacija.component';

describe('ProjektnaDokumentacijaComponent', () => {
  let component: ProjektnaDokumentacijaComponent;
  let fixture: ComponentFixture<ProjektnaDokumentacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektnaDokumentacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektnaDokumentacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
