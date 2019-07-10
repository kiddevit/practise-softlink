import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../product/product';
import { Employee } from '../employee/employee';
import { Company } from '../company/company';
import { User } from '../user/user';
 
@Injectable()
export class DataService<T> {
 
    private urlProduct = "http://localhost:64073/api/product";
	private urlCompany = "http://localhost:64073/api/company";
	private urlEmployee = "http://localhost:64073/api/employee";
	private urlUser = "http://localhost:64073/api/auth";

	private selected_item: T;
	constructor(private http: HttpClient) {}


	getItem() : T  {
        return this.selected_item;
    }

	setItem(item: T){
		this.selected_item = item;
	}

	getList(type: string){
		if(type == "product")
			return this.http.get(this.urlProduct);
		if(type == "employee")
			 return this.http.get(this.urlEmployee);
		if(type == "company")
			return this.http.get(this.urlCompany);
	}

	addItem(type: string, item: T){
		if(type == "product")
			return this.http.post(this.urlProduct, item);
		if(type == "employee")
			 return this.http.post(this.urlEmployee, item);
		if(type == "company")
			return this.http.post(this.urlCompany, item);
	}

	updateItem<T extends ICode>(type: string, item: T){
		if(type == "product")
			return this.http.put(this.urlProduct + '/' + item.id, item);
		if(type == "employee")
			 return this.http.put(this.urlEmployee + '/' + item.id, item);
		if(type == "company")
			return this.http.put(this.urlCompany + '/' + item.id, item);
	}

	deleteItem(type: string, id: number){
		if(type == "product")
			return this.http.delete(this.urlProduct + '/' + id);
		if(type == "employee")
			 return this.http.delete(this.urlEmployee + '/' + id);
		if(type == "company")
			return this.http.delete(this.urlCompany + '/' + id);
	}


	signIn<T>(user: T){
       return this.http.post(this.urlUser, user);
    }
}

interface ICode {
    id: number;
}
