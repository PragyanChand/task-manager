import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskmanagerComponent } from './components/taskmanager/taskmanager.component';
import { TaskformComponent } from './components/taskmanager/taskform/taskform.component';
import { TasklistComponent } from './components/taskmanager/tasklist/tasklist.component';
import { TaskitemComponent } from './components/taskmanager/tasklist/taskitem/taskitem.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskmanagerComponent,
    TaskformComponent,
    TasklistComponent,
    TaskitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
