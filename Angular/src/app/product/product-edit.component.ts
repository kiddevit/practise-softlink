import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Product } from './product';
 
@Component({
    selector: 'productEdit-comp',
    templateUrl:`product-edit.component.html`
})
export class ProductEditComponent {
 
    product: Product;
    constructor(private dataService: DataService<Product>, private router: Router) { }
	
	ngOnInit(){
        this.product = this.dataService.getItem();
    }
	
    save() {
		this.dataService.updateItem("product",this.product).subscribe(date => this.router.navigateByUrl("/product"));
    }
}