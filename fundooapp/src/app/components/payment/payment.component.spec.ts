import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../../app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, } from '@angular/material'
import { IconComponent } from '../icon/icon.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchPipe } from '../pipe/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatChipsModule,MatSliderModule,FlexLayoutModule,MatDividerModule,MatCardModule,MatFormFieldModule, MatInputModule,FormsModule, ReactiveFormsModule,HttpClientModule],
      declarations: [ PaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
