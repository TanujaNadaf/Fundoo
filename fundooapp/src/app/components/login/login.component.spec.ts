import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../../app-routing.module';
import { DialogComponent } from '../../dialog/dialog.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { IconComponent } from '../icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchPipe } from '../pipe/search.pipe';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from '../../search/search.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DisplayComponent } from '../display/display.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceComponent } from '../service/service.component';
import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';
import { PaymentComponent } from '../payment/payment.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatFormFieldModule,FormsModule,MatInputModule,MatCardModule,ReactiveFormsModule,AppRoutingModule,MatIconModule,MatMenuModule,MatDividerModule,MatSidenavModule,MatListModule,MatDatepickerModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule, MatChipsModule,HttpClientModule,BrowserAnimationsModule,FroalaEditorModule, FroalaViewModule,BarRatingModule,MatSliderModule,FlexLayoutModule],
      declarations: [ LoginComponent,DialogComponent,RegisterComponent,DashboardComponent,NotesComponent,RemindersComponent,ArchiveComponent,TrashComponent,IconComponent,SearchPipe,SearchComponent,AddNoteComponent,DisplayComponent,SearchlabelPipe,ServiceComponent,QuestionanswerComponent,PaymentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
