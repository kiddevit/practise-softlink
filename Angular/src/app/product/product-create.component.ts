import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Product } from './product';
import { Company } from '../company/company';
 
@Component({
    selector: 'productCreate-comp',
    templateUrl:`product-create.component.html`
})
export class ProductCreateComponent {
 
    product: Product = new Product(1);
	companies: Company[] = [];
    constructor(private dataService: DataService<Product>, private router: Router) { }

	ngOnInit(){
        this.dataService.getList("company").subscribe((data: Company[]) => this.companies = data);
    }

    save() {
		this.dataService.addItem("product", this.product).subscribe(data => this.router.navigateByUrl("/product"));
    }
}