import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { DialogComponent } from './dialog/dialog.component';
import { SearchComponent } from './search/search.component';
import { QuestionanswerComponent } from './components/questionanswer/questionanswer.component';
import { ServiceComponent } from './components/service/service.component';
import { PaymentComponent } from './components/payment/payment.component';



const routes: Routes = [
  {  path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dialog', component: DialogComponent},
  {
    path: 'register', component: RegisterComponent
  },
  
  {
    path:'service',component:ServiceComponent,
    
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {  path: '', redirectTo: 'notes', pathMatch: 'full' },
      {
        path: 'notes', component: NotesComponent,
        
      },
      {
        path:'reminders',component:RemindersComponent
      },
      {
        path:'archive',component:ArchiveComponent
      },
      {
        path:'trash',component:TrashComponent
      },
      {
        path:'QuestionAnswer/:cardId',component:QuestionanswerComponent
      },
      {
        path:'payment',component:PaymentComponent
      },
    ],
    
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
