import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todo;
  id;
  editForm : FormGroup;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.editForm = new FormGroup({
      input_value: new FormControl('')
    
    });
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit() {
    const index = this.activatedRoute.snapshot.params.index;


    const connectedUser = this.authService.connectedUser;
    this.authService.getById(connectedUser._id).subscribe((data: any) => {
    
    this.todo=data.todos[index];
    console.log(this.todo)
    })
    // const users = JSON.parse(localStorage.getItem('users'));

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].email === connectedUser.email) {
    //     this.todo = users[i].todos[index];
    //     console.log(this.todo);

    //   }
    // }

  }


}
