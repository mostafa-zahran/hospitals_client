import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { GovernoratesProvider } from '../providers/governorates/governorates';
import { SpecialtiesProvider } from '../providers/specialties/specialties';
import { HospitalsProvider } from '../providers/hospitals/hospitals';
import { DepartmentsProvider } from '../providers/departments/departments';
import { DoctorsProvider } from '../providers/doctors/doctors';
import { CommentsProvider } from '../providers/comments/comments';
import { SessionsProvider } from '../providers/sessions/sessions';
import { UsersProvider } from '../providers/users/users';
import { ApiToken } from "../providers/constants";
import { SigninPage } from "../pages/signin/signin";
import { HospitalPage } from "../pages/hospital/hospital";
import { DepartmentPage } from "../pages/department/department"
import { DoctorPage } from "../pages/doctor/doctor";

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SigninPage,
    HospitalPage,
    DepartmentPage,
    DoctorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SigninPage,
    HospitalPage,
    DepartmentPage,
    DoctorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GovernoratesProvider,
    SpecialtiesProvider,
    HospitalsProvider,
    DepartmentsProvider,
    DoctorsProvider,
    CommentsProvider,
    SessionsProvider,
    UsersProvider,
    ApiToken
  ]
})
export class AppModule {}
