import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectedUser;
  message;
  todos;
  id;

  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('connectedUser')) {

      this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    }
  }
  login(loginForm) {
    this.message = '';
    const usersStr = localStorage.getItem('users');
    const users = <any[]>JSON.parse(usersStr);
    console.log(users);



    const valid = users.find((elem) => elem.email === loginForm.value.email && elem.pwd === loginForm.value.pwd);
    if (valid) {
      this.message = 'ok';
      console.log('success');
      const connectedUser = users.filter((elem) => elem.email === loginForm.value.email && elem.pwd === loginForm.value.pwd)[0];
      localStorage.setItem('connectedUser', JSON.stringify(connectedUser));
      console.log('connected user ', connectedUser);
      this.connectedUser = connectedUser;
      this.router.navigateByUrl('/todos');
    } else {
      this.message = 'please verify your login';
      console.log('failed');
    }

  }
  register(form) {
    console.log(form);
    const users = localStorage.getItem('users');
    if (!users) {
      const usersArray = [];
      usersArray.push(form.value);
      localStorage.setItem('users', JSON.stringify(usersArray));
      console.log(form);
    } else {
      const usersJSON = JSON.parse(users);
      console.log(users);

      for (let i = 0; i < usersJSON.length; i++) {
        const element: any = usersJSON[i];

        if (form.value.email === element.email) {
          this.router.navigateByUrl('/login');
          console.log('user exist');
        } else {
          usersJSON.push(form.value);
          localStorage.setItem('users', JSON.stringify(usersJSON));
        }
      }

    }
  }

  getValue(todosForm) {


    if (todosForm.value.input_value !== '') {
      const todoArray = [];
      const todo = { title: todosForm.value.input_value, date: Date.now(), Done: false };

      this.todos.push(todo);
      // localStorage.setItem('todos', JSON.stringify(todo));

      return this.http.post('http://chehir.tn:3000/ranim/user', this.todos);
    }
  }
  isAuth() {

    return JSON.parse(localStorage.getItem('connectedUser'));
    return this.http.get('http://chehir.tn:3000/ranim/login/id');
  }
  getTodo() {

    return JSON.parse(localStorage.getItem('todos'));

  }

  updateUser(user, id) {
    return this.http.post('http://chehir.tn:3000/ranim/update/' + id, user);
  }
  getUser(id) {
    return this.http.get('http://chehir.tn:3000/ranim/user/' + id);
  }
  checkLogin(user) {

    return this.http.post('http://chehir.tn:3000/ranim/login', user);

    // this.router.navigateByUrl('/todos');
  }
  registerUser(user) {

    // const usersArray = [];
    // usersArray.push(user);
    // console.log(usersArray)
    return this.http.post('http://chehir.tn:3000/ranim/register', user);
  }
  getById(id) {
    return this.http.get('http://chehir.tn:3000/ranim/user/' + id);
  }
}
