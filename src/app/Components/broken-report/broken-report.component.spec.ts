import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenReportComponent } from './broken-report.component';

describe('BrokenReportComponent', () => {
  let component: BrokenReportComponent;
  let fixture: ComponentFixture<BrokenReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokenReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
