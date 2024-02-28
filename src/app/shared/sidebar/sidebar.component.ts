import { Component } from '@angular/core';
import { UserService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(){
  }
  
  logout(){
    this.userService.removeToken()
    this.router.navigate(['/login'])
  }
}
