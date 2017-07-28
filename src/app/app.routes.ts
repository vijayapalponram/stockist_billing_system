import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import {HeaderComponent, SidebarComponent} from './shared';
import {ProductComponent} from './masters';
import {LoginComponent} from './login/login.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    {path: 'app', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'login', pathMatch:'full'}
    
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

