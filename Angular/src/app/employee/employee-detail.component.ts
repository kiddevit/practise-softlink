import { Component, Input } from '@angular/core';
import {DataService} from '../services/data.service';
import { Employee } from './employee';
 
@Component({
	selector: 'employeeDetail-comp',
    templateUrl:`employee-detail.component.html`
})
export class EmployeeDetailComponent {
	
	employee: Employee;
	constructor(private dataService: DataService<Employee>){}
	
	ngOnInit(){
        this.employee = this.dataService.getItem();
    }
}