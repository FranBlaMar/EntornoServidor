import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./AuthGuard.service";
const appRoutes: Routes = [
  {    
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {    
    path: 'protected',
    canActivate: [AuthGuard],
    loadChildren: () => import('./protected/protected.module')
    .then(m => m.ProtectedModule)
  },
  { path: '**', redirectTo: ''}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]})

export class AppRoutingModule { } 