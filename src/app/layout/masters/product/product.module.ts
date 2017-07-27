import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProductRoutingModule
    ],
    declarations: [
        ProductComponent
    ]
})
export class ProductModule { }

