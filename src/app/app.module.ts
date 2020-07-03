import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskmanagerComponent } from './components/taskmanager/taskmanager.component';
import { TaskformComponent } from './components/taskmanager/taskform/taskform.component';
import { TasklistComponent } from './components/taskmanager/tasklist/tasklist.component';
import { TaskitemComponent } from './components/taskmanager/tasklist/taskitem/taskitem.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { TaskDetailComponent } from './components/taskmanager/task-detail/task-detail.component';

const routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'tasks', component:TaskmanagerComponent},
  {path:'tasks/:id', component:TaskDetailComponent},
  {path: '**', component:PagenotfoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskmanagerComponent,
    TaskformComponent,
    TasklistComponent,
    TaskitemComponent,
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
