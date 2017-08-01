import {
  Component,
  OnInit,
  TemplateRef
} from '@angular/core';

import {TableData} from './table-data';
import {ProductService} from './product.service';
import {PaginationConfig } from 'ngx-bootstrap/pagination';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'product',  
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  private data:Array<any>;
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'productName', filtering: {filterString: '', placeholder: 'Filter by product name'}},
    {title: 'Rate', name: 'rate', sort: 'asc'},
    {title: 'Cost', name: 'cost'},
    {title: 'MRP', name: 'mrp'},
    {title: 'Pack', name: 'pack'},
    {title: 'Vat%', name: 'vat'},
    {title: 'MFGR', name: 'mfgr'},
    {title: 'Min.Stock', name: 'minStock'},
    {title: 'HSN Code', name: 'hsnCode'}    
  ];
  public page:number = 1;
  public itemsPerPage:number = 5;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
public modalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  public modalRef:BsModalRef;
  public constructor(private _productService:ProductService, private _paginationConfig:PaginationConfig, public _modalService:BsModalService) {
    
  }

  public ngOnInit():void {
    this._productService.getProductList().subscribe((productList)=>{
      this.data = productList;
      this.length = this.data.length;
      this.onChangeTable(this.config);
    })
    
  }
  public openProductModal(template:TemplateRef<any>)
  {
    this.modalRef = this._modalService.show(template);
    
    
  }
  public closeProductModal(){
    //this.modalRef.hide();
    this._modalService.hide(this._modalService.getModalsCount());
    //this._modalService._hideModal(1);
    //this._modalService._hideBackdrop();
      
  }
  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}
