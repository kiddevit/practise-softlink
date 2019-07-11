import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { EmployeeListComponent }   from './employee-list.component';
import { EmployeeCreateComponent }   from './employee-create.component';
import { EmployeeDetailComponent }   from './employee-detail.component';
import { EmployeeEditComponent }   from './employee-edit.component';


export const appRoutes: Routes = [
    { path: '', component: EmployeeListComponent},
    { path: 'create', component: EmployeeCreateComponent },
    { path: 'detail', component: EmployeeDetailComponent },
    { path: 'edit', component: EmployeeEditComponent },
];

@NgModule({
    imports: [ FormsModule, CommonModule, RouterModule.forChild(appRoutes) ],
    declarations: [ EmployeeListComponent, EmployeeCreateComponent, EmployeeDetailComponent, EmployeeEditComponent ],
})
export class EmployeeModule {}