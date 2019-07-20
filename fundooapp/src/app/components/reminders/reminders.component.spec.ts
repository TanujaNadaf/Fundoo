import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindersComponent } from './reminders.component';
import { DisplayComponent } from '../display/display.component';
import { SearchPipe } from '../pipe/search.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { IconComponent } from '../icon/icon.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatSnackBarModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

describe('RemindersComponent', () => {
  let component: RemindersComponent;
  let fixture: ComponentFixture<RemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,MatChipsModule,MatCardModule,MatMenuModule,MatDividerModule,MatDatepickerModule,FormsModule,ReactiveFormsModule,MatInputModule,MatAutocompleteModule,MatSelectModule,MatCheckboxModule,HttpClientModule,MatSnackBarModule],
      declarations: [ RemindersComponent,DisplayComponent,SearchPipe, IconComponent, SearchlabelPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
