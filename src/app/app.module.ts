import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
