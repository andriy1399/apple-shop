import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { DividerModule } from "primeng/divider";
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SignInComponent } from './components/sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoreComponent,
    AuthLayoutComponent,
    SignInComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFirestoreModule,
    MenubarModule,
    TabViewModule,
    DividerModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
