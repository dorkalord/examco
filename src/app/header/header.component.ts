import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
    show: boolean = false;
    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) 
    {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(this.currentUser!=null){
            this.show = true;
        }
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(this.currentUser!=null){
            this.show = true;
        }
        else { 
            this.show = false;
        }
    }

    ngDoCheck()	{
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(this.currentUser!=null){
            this.show = true;
        }
        else { 
            this.show = false;
        }
    }

}
