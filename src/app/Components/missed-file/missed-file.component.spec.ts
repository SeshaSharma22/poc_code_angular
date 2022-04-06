import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedFileComponent } from './missed-file.component';

describe('MissedFileComponent', () => {
  let component: MissedFileComponent;
  let fixture: ComponentFixture<MissedFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissedFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
