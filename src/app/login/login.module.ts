import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {LoginService} from './login.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        HttpModule
    ],
    declarations: [LoginComponent],
    providers:[LoginService]
})
export class LoginModule {
}
