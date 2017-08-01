import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProductModel} from './product.model';

@Injectable()
export class ProductService {

    private productUrl : string = "http://localhost:3000/api/v1/products";

    constructor(private _http:Http){

    }

    public getProductList() : Observable<IProductModel[]>{
        let token = sessionStorage.getItem('token').toString();
        this.productUrl = this.productUrl + "?token="+ token;
        let headers      = new Headers({ "x-access-token": token });
        let options       = new RequestOptions({ headers: headers });
        return this._http.get(this.productUrl).map((res:Response)=> res.json());
    }

    public saveProduct(product:IProductModel) : Observable<IProductModel[]>{
        let token = sessionStorage.getItem('token').toString();
        this.productUrl = this.productUrl + "?token="+ token;
        let headers      = new Headers({ "x-access-token": token });
        let options       = new RequestOptions({ headers: headers });
        return this._http.post(this.productUrl, {'product':product}).map((res:Response)=> res.json());
    }
}
