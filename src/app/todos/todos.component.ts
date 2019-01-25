import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosForm: FormGroup;
  input1: FormControl;
  input2: FormControl;
  formatdate = 'dd/MM/yyyy';
  todos = [];
  constructor(private authService: AuthService) {
    this.todosForm = new FormGroup({
      input_value: new FormControl('', [Validators.required, Validators.minLength(8)]),
      input_value2: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    console.log(connectedUser);
    this.authService.getUser(connectedUser._id).subscribe((data: any) => {
      if (data.todos) {
        this.todos = data.todos;
      }
    })

    // const users = JSON.parse(localStorage.getItem('users'));

    //  for (let i = 0; i < users.length; i++) {
    // if (users[i].email === connectedUser.email) {
    //      this.todos = users[i].todos

    //   }
    // }

  }
  getValue(todosForm) {
    console.log(todosForm.value);
    if (todosForm.value.input_value !== '') {

      const todo = { title: todosForm.value.input_value, date: Date.now(), Done: false };

      this.todos.push(todo);

      const connectedUser = this.authService.connectedUser;

      connectedUser['todos'] = this.todos;

      // api update

      this.authService.updateUser(connectedUser, connectedUser._id).subscribe(data => {
        console.log(data);
      })

      // const users = JSON.parse(localStorage.getItem('users'));

      // for (let i = 0; i < users.length; i++) {
      //   if (users[i].email === connectedUser.email) {
      //     users[i] = connectedUser;
      //   }
      // }

      // localStorage.setItem('users', JSON.stringify(users));

      // todosForm.value.input_value2 = todosForm.value.input_value;
      // this.input1 = todosForm.value.input_value;


      // const now = Date.now();
      // console.log(this.myFormattedDate);

      // this.input2 = todosForm.value.input_value2 + now;

      // this.todosForm.setValue({ input_value: this.input1, input_value2: this.input2 });
      // console.log(new Date().toISOString());
    }
  }


}
