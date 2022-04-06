import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MissedFileComponent } from './Components/missed-file/missed-file.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { ComplexComponent } from './complex/complex.component';
import { BrokenReportComponent } from './Components/broken-report/broken-report.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MissedFileComponent,
    NavBarComponent,
    ComplexComponent,
    BrokenReportComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
