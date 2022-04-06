import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokenReportComponent } from './Components/broken-report/broken-report.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MissedFileComponent } from './Components/missed-file/missed-file.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    
    path: 'home',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'missedfile',
    component: MissedFileComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch:'full'
  },
  {
    path: 'brokenreport',
    component: BrokenReportComponent,
    pathMatch: 'full'
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
