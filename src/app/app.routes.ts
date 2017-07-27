import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import {HeaderComponent, SidebarComponent} from './shared';
import {ProductComponent} from './masters';

export const ROUTES: Routes = [ 
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
];
