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
import { AppRoutingModule } from '../../app-routing.module'
import { LoginComponent } from '../login/login.component';
import { DialogComponent } from '../../dialog/dialog.component';
import { RegisterComponent } from '../register/register.component';
import { ServiceComponent } from '../service/service.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';
import { PaymentComponent } from '../payment/payment.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from '../../search/search.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DisplayComponent } from '../display/display.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { MatChipsModule } from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchPipe } from '../pipe/search.pipe';
import {MatTabsModule} from '@angular/material/tabs';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatMenuModule,MatDividerModule,MatFormFieldModule,MatAutocompleteModule,MatDatepickerModule,MatSelectModule,FormsModule,MatCheckboxModule ,MatIconModule,HttpClientModule,MatSnackBarModule,MatNativeDateModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule,AppRoutingModule,MatCardModule,MatSidenavModule,MatListModule,FroalaEditorModule, FroalaViewModule,BarRatingModule,MatChipsModule,MatSliderModule,FlexLayoutModule,MatTabsModule],
      declarations: [ IconComponent,SearchlabelPipe,LoginComponent,DialogComponent,RegisterComponent,ServiceComponent,DashboardComponent,NotesComponent,RemindersComponent,ArchiveComponent,TrashComponent,QuestionanswerComponent,PaymentComponent,SearchComponent,AddNoteComponent,DisplayComponent,SearchPipe ],
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
