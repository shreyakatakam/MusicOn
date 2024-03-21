import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplaysoundsComponent } from './displaysounds/displaysounds.component';
import { AdminsongsComponent } from './adminsongs/adminsongs.component';
import { AddsongsComponent } from './addsongs/addsongs.component';
import { OpensongComponent } from './opensong/opensong.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PasswordProtectionComponent } from './password-protection/password-protection.component';
import { FolderComponentComponent } from './folder-component/folder-component.component';
import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DisplaysoundsComponent,
    AdminsongsComponent,
    AddsongsComponent,
    OpensongComponent,
    HomeComponent,
    ContactUsComponent,
    PasswordProtectionComponent,
    FolderComponentComponent,
    AddToFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
