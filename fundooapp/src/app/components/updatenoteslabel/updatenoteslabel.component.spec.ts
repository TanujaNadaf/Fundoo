import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenoteslabelComponent } from './updatenoteslabel.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
describe('UpdatenoteslabelComponent', () => {
  let component: UpdatenoteslabelComponent;
  let fixture: ComponentFixture<UpdatenoteslabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatInputModule,FormsModule,MatDividerModule,HttpClientModule],
      declarations: [ UpdatenoteslabelComponent ],
      providers:[
        {
         provide: MatDialogRef,
         

        },
        
          { provide: MAT_DIALOG_DATA, useValue:{} },
       
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenoteslabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
