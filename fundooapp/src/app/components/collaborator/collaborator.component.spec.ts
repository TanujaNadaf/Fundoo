import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { CollaboratorComponent,} from './collaborator.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

describe('CollaboratorComponent', () => {
  let component: CollaboratorComponent;
  let fixture: ComponentFixture<CollaboratorComponent>;
  
 
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MatDividerModule,MatMenuModule,FormsModule,MatDialogModule,HttpClientModule,MatSnackBarModule,],
      declarations: [ CollaboratorComponent,],
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
    fixture = TestBed.createComponent(CollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
