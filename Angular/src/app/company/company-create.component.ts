import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Company } from './company';
 
@Component({
    selector: 'companyCreate-comp',
    templateUrl:`./company-create.component.html`
})
export class CompanyCreateComponent {

    company: Company = new Company(1);
    constructor(private dataService: DataService<Company>, private router: Router) { }

    save() {
		this.dataService.addItem("company", this.company).subscribe(data => this.router.navigateByUrl("/company"));
    }
}