import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../../app-routing.module'
import { LoginComponent } from '../login/login.component';
import { DialogComponent } from '../../dialog/dialog.component';
import { RegisterComponent } from '../register/register.component';
import { NotesComponent } from '../notes/notes.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../../search/search.component';
import { MatCardModule } from '@angular/material/card';
import { IconComponent } from '../icon/icon.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DisplayComponent } from '../display/display.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { SearchPipe } from '../pipe/search.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,MatFormFieldModule,MatMenuModule,MatDividerModule,MatSidenavModule,MatListModule,AppRoutingModule,FormsModule,ReactiveFormsModule,MatCardModule, MatDatepickerModule,MatAutocompleteModule,MatSelectModule,MatCheckboxModule,MatChipsModule,HttpClientModule,BrowserAnimationsModule,MatInputModule],
      declarations: [ DashboardComponent,LoginComponent,DialogComponent,RegisterComponent,NotesComponent,RemindersComponent,ArchiveComponent, TrashComponent,SearchComponent,IconComponent,AddNoteComponent,DisplayComponent,SearchlabelPipe,SearchPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
