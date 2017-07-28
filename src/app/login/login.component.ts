import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from './login.service';
import {ILoginResult} from './login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public username : string="";
    public password : string="";
    private loginResult : ILoginResult;
    constructor(private _router: Router, private _loginService:LoginService) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        this._loginService.signIn(this.username, this.password).subscribe((loginResult)=>{
            if(loginResult.found) {
                sessionStorage.setItem('isLoggedin', 'true');
                this._router.navigate(['/product']);
            }
            else {
                sessionStorage.setItem('isLoggedin', 'false');
            }
        });
        
    }

}
