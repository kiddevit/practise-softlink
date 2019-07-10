import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Company } from './company';

 
@Component({
    selector: 'companyList-comp',
    templateUrl:`company-list.component.html`
})
export class CompanyListComponent { 
    companies: Company[] = [];
    constructor(private dataService: DataService<Company>, private router: Router) { }
     
    ngOnInit(){
        this.load();
    }

    load() {
        this.dataService.getList("company").subscribe((data: Company[]) => this.companies = data);
    }
	
	delete(id: number){
		this.dataService.deleteItem("company", id).subscribe(data => this.load());
	}
	
	select(company: Company){
		this.dataService.setItem(company);
		this.router.navigate(['/company/detail']);
	}
	
	edit(company: Company){
		this.dataService.setItem(company);
		this.router.navigate(['/company/edit']);
	}
}