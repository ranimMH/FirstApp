import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, HttpClientModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    // tslint:disable-next-line:max-line-length
    localStorage.setItem('connectedUser', JSON.stringify({ '_id': '5c46fda6a3962e341e49aaa0' }));
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value1 invalid and date valid ', () => {
    const value1 = component.todosForm.controls['input_value'];
    value1.setValue('ghjk');
    const date = component.todosForm.controls['input_value2'];
    date.setValue(new Date());

    expect(component.todosForm.controls['input_value'].invalid).toBeTruthy();
    date.setValue(new Date());

    component.getValue(component.todosForm);

  });


});
