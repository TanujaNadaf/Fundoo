import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import { HttpClientModule} from '@angular/common/http';
 import {MatDividerModule} from '@angular/material/divider';
 import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material'
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { IconComponent } from './components/icon/icon.component';
import { DisplayComponent } from './components/display/display.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditlabelsComponent } from './editlabels/editlabels.component';
import { DeletelabelComponent } from './components/deletelabel/deletelabel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './components/pipe/search.pipe';
import {MatNativeDateModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips'; 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NotesComponent,
    AddNoteComponent,
    RemindersComponent,
    ArchiveComponent,
    TrashComponent,
    IconComponent,
    DisplayComponent,
    DialogComponent,
    EditlabelsComponent,
    DeletelabelComponent,
    
    SearchComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,MatDividerModule,MatGridListModule,MatToolbarModule,MatSidenavModule,
    MatListModule,MatButtonToggleModule,MatIconModule,MatMenuModule,MatExpansionModule,MatSnackBarModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatAutocompleteModule,MatSelectModule,MatChipsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,EditlabelsComponent,DeletelabelComponent ]
})
export class AppModule { }
