import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', component: LoginComponent }
];

export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class LoginRoutingModule { }

