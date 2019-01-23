import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: String;
  connectedUser;
  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl('')
    });
  }
  ngOnInit() {
    const connected = localStorage.getItem('connectedUser');

    if (connected) {
      this.router.navigateByUrl('/todos');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  loginUser(loginForm) {
    this.authService.checkLogin(loginForm.value).subscribe((data: any) => {
      console.log(data)
      this.connectedUser = data
      console.log(this.connectedUser)
      console.log('connected user ', this.connectedUser);
      if (data._id) {
        this.router.navigateByUrl('/todos');
        localStorage.setItem('connectedUser', JSON.stringify(data));
      } else {
        this.message = data.message;
      }

    });

  }

}
