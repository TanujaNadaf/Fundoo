import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackdialogComponent } from './packdialog.component';

describe('PackdialogComponent', () => {
  let component: PackdialogComponent;
  let fixture: ComponentFixture<PackdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
