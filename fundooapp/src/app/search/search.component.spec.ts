import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatSnackBarModule, MatFormFieldModule, MatNativeDateModule, MatListModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IconComponent } from '../components/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from '../components/display/display.component';
import { SearchPipe } from '../components/pipe/search.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { DialogComponent } from '../dialog/dialog.component';
import { RegisterComponent } from '../components/register/register.component';
import{ SearchlabelPipe }from '../components/pipe/searchlabel.pipe';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NotesComponent } from '../components/notes/notes.component';
import { RemindersComponent } from '../components/reminders/reminders.component';
import { ArchiveComponent } from '../components/archive/archive.component';
import { TrashComponent } from '../components/trash/trash.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddNoteComponent } from '../components/add-note/add-note.component';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,MatChipsModule,MatCardModule,MatMenuModule,MatDatepickerModule,MatFormFieldModule,
        MatDividerModule,MatSelectModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,FormsModule,MatCheckboxModule,AppRoutingModule,ReactiveFormsModule,MatSidenavModule,MatListModule,HttpClientModule,MatSnackBarModule],
      declarations: [ SearchComponent,DisplayComponent,SearchPipe,IconComponent,SearchlabelPipe,LoginComponent,DialogComponent,RegisterComponent,DashboardComponent,NotesComponent,RemindersComponent,ArchiveComponent,
      TrashComponent,AddNoteComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
