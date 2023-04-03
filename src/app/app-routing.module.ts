import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'register',component:LoginComponent},

  {path:'*',redirectTo:"home",pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
