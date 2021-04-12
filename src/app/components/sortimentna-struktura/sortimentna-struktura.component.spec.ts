import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortimentnaStrukturaComponent } from './sortimentna-struktura.component';

describe('SortimentnaStrukturaComponent', () => {
  let component: SortimentnaStrukturaComponent;
  let fixture: ComponentFixture<SortimentnaStrukturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortimentnaStrukturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortimentnaStrukturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
