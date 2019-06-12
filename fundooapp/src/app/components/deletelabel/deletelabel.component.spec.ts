import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelabelComponent } from './deletelabel.component';

describe('DeletelabelComponent', () => {
  let component: DeletelabelComponent;
  let fixture: ComponentFixture<DeletelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
