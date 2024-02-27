import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '')
  
  constructor(private authService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    console.log(this.user, 'user')
    console.log(this.authService.isAuthenticated());
    
  }
  
  
  onSubmit(){
    console.log('submit');
    
    this.authService.register(this.user).subscribe((response) => {
      this.authService.setToken(response.token)
      this.router.navigate(['/']);
    })
  }

}
