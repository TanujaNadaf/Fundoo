import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditlabelsComponent } from './editlabels.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatSnackBarModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


describe('EditlabelsComponent', () => {
  let component: EditlabelsComponent;
  let fixture: ComponentFixture<EditlabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,FormsModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatDividerModule,
        HttpClientModule,MatDialogModule],
      declarations: [ EditlabelsComponent ],
      providers:[
        {provide:MatDialogRef}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
