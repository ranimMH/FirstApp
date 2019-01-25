import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  pwd: FormControl;
  users: Array<User> = new Array<User>();
  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(''),
      Email: new FormControl('', [Validators.email, Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  ngOnInit() {

  }
  register(form) {
    this.authService.registerUser(form.value).subscribe(data => {
      console.log(data);
    });
  }

  // onClick(name, lname, email, pwd, user): void {
  // user = { "name": name, "lname": lname, "email": email, "pwd": pwd };



  // let users = localStorage.getItem('users');
  // if (!users) {
  // let users = [];
  //  users.push(user);
  //  localStorage.setItem('users', JSON.stringify(users));
  // console.log("success")
  //  this.router.navigate(['/login']);
  //   } else {
  //  users = JSON.parse(users);
  //  users.push(user);
  //  localStorage.setItem('users', JSON.stringify(users));
  // }

  // console.log(user);
  // localStorage.setItem("users", JSON.stringify(user));
  // if (Users.length > 0) {
  //   user.push()
  // }
  // localStorage.setItem("lname",user);
  // localStorage.setItem("email",user);
  // localStorage.setItem("pwd",user);

  // }
}

export class User {

  name: string;
  lastname: string;
  email: string;
  password: string;
  userId: string;

}
