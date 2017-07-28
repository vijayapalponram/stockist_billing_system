import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProductRoutingModule,
        Ng2TableModule
    ],
    declarations: [
        ProductComponent
    ],

})
export class ProductModule { }

