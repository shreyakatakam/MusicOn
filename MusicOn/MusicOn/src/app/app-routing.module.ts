import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DisplaysoundsComponent } from './displaysounds/displaysounds.component';
import { AdminsongsComponent } from './adminsongs/adminsongs.component';
import { AddsongsComponent } from './addsongs/addsongs.component';
import { OpensongComponent } from './opensong/opensong.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FolderComponentComponent } from './folder-component/folder-component.component';
import { PasswordProtectionComponent } from './password-protection/password-protection.component';
import { AddToFavoritesComponent } from './add-to-favorites/add-to-favorites.component';

const routes: Routes = [
  {path:"" , redirectTo: "/login", pathMatch:"full"},
  {path:"login", component: LoginComponent },
  {path:"register", component: RegisterComponent },
  {path:"displaysounds", component: DisplaysoundsComponent },
  {path:"adminsongs", component: AdminsongsComponent},
  {path:"addsongs", component: AddsongsComponent},
  {path:"opensong", component: OpensongComponent},
  {path: 'about', component: HomeComponent },
  {path: 'contact-us', component: ContactUsComponent },
  { path: 'password-protection/:folderName', component: PasswordProtectionComponent },
  { path: 'folder', component: FolderComponentComponent },
  { path: '', redirectTo: '/folder', pathMatch: 'full' },
  { path: 'add-to-favorites/:folderName', component: AddToFavoritesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
