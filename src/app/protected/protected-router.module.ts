import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      children: [
          { path: '', component: HomeComponent},
          { path: 'users', component: UsersComponent},
          { path: 'servers', component: ServersComponent},
          { path: '**', redirectTo: ''}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProtectedRoutingModule { } 