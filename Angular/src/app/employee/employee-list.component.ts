import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { Employee } from './employee';
     
	 
@Component({
    selector: 'employeeList-comp',
    templateUrl: `employee-list.component.html`
})
export class EmployeeListComponent { 
    employees: Employee[] = [];
    constructor(private dataService: DataService<Employee>, private router: Router) { }
     
    ngOnInit(){
		this.load();
    }

    load() {
        this.dataService.getList("employee").subscribe((data: Employee[]) => this.employees = data);
    }
	
	delete(id: number){
		this.dataService.deleteItem("employee", id).subscribe(data => this.load());
	}
	
	select(employee: Employee){
		this.dataService.setItem(employee);
		this.router.navigate(['/employee/detail']);
	}
	
	edit(employee: Employee){
		this.dataService.setItem(employee);
		this.router.navigate(['/employee/edit']);
	}
}