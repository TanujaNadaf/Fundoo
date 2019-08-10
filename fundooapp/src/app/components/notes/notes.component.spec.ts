import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DisplayComponent } from '../display/display.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDatepicker, MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IconComponent } from '../icon/icon.component';
import { SearchPipe } from '../pipe/search.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { DialogComponent } from '../../dialog/dialog.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from '../../search/search.component';
import { ServiceComponent } from '../service/service.component';
import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';
import { PaymentComponent } from '../payment/payment.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ FormsModule,MatFormFieldModule,MatInputModule,MatCardModule, MatIconModule,MatAutocompleteModule,ReactiveFormsModule,MatChipsModule,MatMenuModule,MatDividerModule,MatDatepickerModule ,MatCheckboxModule,MatSelectModule,HttpClientModule,AppRoutingModule,MatSidenavModule ,MatListModule,MatSnackBarModule,FroalaEditorModule, FroalaViewModule,BarRatingModule,MatSliderModule,FlexLayoutModule],
      declarations: [ NotesComponent,AddNoteComponent,DisplayComponent,IconComponent,SearchPipe,SearchlabelPipe,LoginComponent,DialogComponent, RegisterComponent,DashboardComponent,RemindersComponent,ArchiveComponent,TrashComponent,SearchComponent,ServiceComponent,QuestionanswerComponent,PaymentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
