import { Component, Input } from '@angular/core';
import {DataService} from '../services/data.service';
import { Company } from './company';
 
@Component({
	selector: 'companyDetail-comp',
    templateUrl:`company-detail.component.html`
})
export class CompanyDetailComponent {
	
	company: Company;
	constructor(private dataService: DataService<Company>){}
	
	ngOnInit(){
        this.company = this.dataService.getItem();
    }
}