import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {ProductService} from './product.service';
import {PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProductRoutingModule,
        Ng2TableModule,
        PaginationModule
    ],
    declarations: [
        ProductComponent
    ],
    providers:[ProductService, PaginationConfig, BsModalService]
})
export class ProductModule { }

