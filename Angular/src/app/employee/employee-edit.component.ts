import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Employee } from './employee';
 
@Component({
    selector: 'employeeEdit-comp',
    templateUrl:`employee-edit.component.html`
})
export class EmployeeEditComponent {
 
    employee: Employee;
    constructor(private dataService: DataService<Employee>, private router: Router) { }
	
	ngOnInit(){
        this.employee = this.dataService.getItem();
    }
	
    save() {
		this.dataService.updateItem("employee",this.employee).subscribe(data => this.router.navigateByUrl("/employee"));
    }
}