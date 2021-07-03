import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSlucajniComponent } from './print-slucajni.component';

describe('PrintSlucajniComponent', () => {
  let component: PrintSlucajniComponent;
  let fixture: ComponentFixture<PrintSlucajniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSlucajniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSlucajniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
