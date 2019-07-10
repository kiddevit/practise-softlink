import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Employee } from './employee';
import { Company } from '../company/company';
 
@Component({
    selector: 'employeeCreate-comp',
    templateUrl:`employee-create.component.html`
})
export class EmployeeCreateComponent {
 
    employee: Employee = new Employee(1);
	companies: Company[] = [];
    constructor(private dataService: DataService<Employee>, private router: Router) { }

	ngOnInit(){
        this.dataService.getList("company").subscribe((data: Company[]) => this.companies = data);
    }

    save() {
		this.dataService.addItem("employee", this.employee).subscribe(data => this.router.navigateByUrl("/employee"));
    }
}