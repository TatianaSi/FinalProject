import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: 'list', component:TodoComponent},
  {path: '', component:MainComponent},
  {path: 'about', component:AboutComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
