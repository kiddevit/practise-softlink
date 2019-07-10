import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Company } from './company';
 
@Component({
    selector: 'companyEdit-comp',
    templateUrl:`company-edit.component.html`
})
export class CompanyEditComponent {
 
    company: Company;
    constructor(private dataService: DataService<Company>, private router: Router) { }
	
	ngOnInit(){
        this.company = this.dataService.getItem();
    }
	
    save() {
		this.dataService.updateItem("company",this.company).subscribe(data => this.router.navigateByUrl("/company"));
    }
}