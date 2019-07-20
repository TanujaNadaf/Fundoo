import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatSnackBarModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IconComponent } from '../components/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{SearchlabelPipe}from '../components/pipe/searchlabel.pipe';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatMenuModule,MatDividerModule,
        MatDatepickerModule,MatIconModule,MatAutocompleteModule,MatSelectModule,MatCheckboxModule,MatDialogModule,
        HttpClientModule,MatSnackBarModule,MatNativeDateModule,BrowserAnimationsModule],
      declarations: [ DialogComponent,IconComponent, SearchlabelPipe],
      providers:[
        {provide:MatDialogRef},
        {provide:MAT_DIALOG_DATA,useValue:{}},
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
