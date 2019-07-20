import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatAutocompleteModule, MatSnackBarModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatMenuModule,MatDividerModule,MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,MatSelectModule,FormsModule,MatCheckboxModule ,MatIconModule,HttpClientModule,MatSnackBarModule,MatNativeDateModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule],
      declarations: [ IconComponent,SearchlabelPipe ],
      providers:[
        {provide:MatDatepickerModule}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
