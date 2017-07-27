import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'product',  
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  
  constructor() {}

  public ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     /**
    //      * Your resolved data from route.
    //      */
    //     this.localState = data.yourData;
    //   });

  console.log('hello `Product` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
   // this.asyncDataWithWebpack();
  }
 /* private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
}*/

}
