import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { RegisterComponent } from './register.component';
import {DebugElement} from '@angular/core'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { DialogComponent } from '../../dialog/dialog.component';
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
import { MatListModule } from '@angular/material/list';
import { SearchPipe } from '../pipe/search.pipe';
import { SearchComponent } from '../../search/search.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DisplayComponent } from '../display/display.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchlabelPipe } from '../pipe/searchlabel.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { executionAsyncId } from 'async_hooks';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let debugElement: DebugElement
  let element:HTMLElement
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatSelectModule,FormsModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatCardModule,AppRoutingModule,MatIconModule,MatMenuModule,MatDividerModule,MatSidenavModule,MatListModule,MatDatepickerModule,MatAutocompleteModule,MatCheckboxModule,MatChipsModule,HttpClientModule,BrowserAnimationsModule ],
      declarations: [ RegisterComponent,LoginComponent,DialogComponent,DashboardComponent,NotesComponent,RemindersComponent,ArchiveComponent,TrashComponent,IconComponent,SearchPipe,SearchComponent,AddNoteComponent,DisplayComponent,SearchlabelPipe ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;
      debugElement =fixture.debugElement.query(By.css('form'));
      element= debugElement.nativeElement
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the register method',async(()=>{
    fixture.detectChanges();
    spyOn(component,'register');
    element=fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.register).toHaveBeenCalledTimes(1);
  }))
  it('registerModel should be invalid',async(()=>{
    
    
  }))
  it('registerModel should be valid',async(()=>{
    
    
  }))
});
