import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:"users",component:UsersComponent},
  {path:"user/:id",component:UserDataComponent},
  {path:"**",component:NotFoundComponent} 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
