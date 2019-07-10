import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { User } from './user';
  
@Component({
    selector: 'authentication-comp',
    templateUrl:`authentication.component.html`
})
export class AuthenticationComponent {
	
	user: User = new User(1, "Admin", "0000");
    done: boolean;
    constructor(private dataService: DataService<User>, private router: Router) { }

    signIn(user: User) {
		this.dataService.signIn(this.user).subscribe((data: boolean) =>{
                                                                        this.done = data;
                                                                        if(this.done)
                                                                            this.router.navigate(['/company']);
                                                                        });
    }

}