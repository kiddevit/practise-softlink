import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Product } from './product';
     
@Component({
    selector: 'productList-comp',
    templateUrl: `product-list.component.html`
})
export class ProductListComponent { 

	products: Product[] = [];
    constructor(private dataService: DataService<Product>, private router: Router) { }
     
    ngOnInit(){
       this.load();
    }

	load() {
        this.dataService.getList("product").subscribe((data: Product[]) => this.products = data);
    }

	delete(id: number){
		this.dataService.deleteItem("product", id).subscribe(data => this.load());
	}
	
	select(product: Product){
		this.dataService.setItem(product);
		this.router.navigate(['/product/detail']);
	}
	
	edit(product: Product){
		this.dataService.setItem(product);
		this.router.navigate(['/product/edit']);
	}
}