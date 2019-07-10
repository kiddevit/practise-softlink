import { Component, Input } from '@angular/core';
import {DataService} from '../services/data.service';
import { Product } from './product';
 
@Component({
	selector: 'productDetail-comp',
    templateUrl:`product-detail.component.html`
})
export class ProductDetailComponent {
	
	product: Product;
	constructor(private dataService: DataService<Product>){}
	
	ngOnInit(){
        this.product = this.dataService.getItem();
    }
}