import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { UsersComponent } from './components/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';
import { UserDataComponent } from './components/user-data/user-data.component'
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
    UsersComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    HttpClientModule,   
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
