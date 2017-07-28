import { Injectable }     from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {ILoginResult} from './login.model'

@Injectable()
export class LoginService {

    private loginUrl : string = "http://localhost:3000/api/v1/users/login";

    public constructor(private _http: Http)
    {

    }
    public signIn(username:string, password:string):Observable<ILoginResult>
    {
        let body = JSON.stringify({"username":username, "password":password});
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.loginUrl, body, options)
        .map((res:Response) => res.json());
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}