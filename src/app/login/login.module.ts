import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

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
