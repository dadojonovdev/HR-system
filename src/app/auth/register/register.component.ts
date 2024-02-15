import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '')
  
  constructor(private authService: UserService) {}
  
  ngOnInit(): void {
    console.log(this.user, 'user')
  }
  
  
  onSubmit(){
    console.log('submit');
    
    this.authService.register(this.user).subscribe((response) => {
      this.authService.setToken(response.token)
    })
  }

}
