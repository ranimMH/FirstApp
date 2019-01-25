import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
       ,
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email invalid and password valid and name valid', () => {
    const email = component.registerForm.controls['Email'];
    email.setValue('emailInValid');
    const password = component.registerForm.controls['Password'];
    password.setValue('123456');
    const name = component.registerForm.controls['name'];
    name.setValue('ranim');
    expect(component.registerForm.controls['Email'].invalid).toBeTruthy();
    password.setValue('123456');
    name.setValue('ranim');
    component.register(component.registerForm);

  });
  it('email valid and password invalid and name invalid', () => {
    const email = component.registerForm.controls['Email'];
    email.setValue('ranim@gmail.com');
    const password = component.registerForm.controls['Password'];
    password.setValue('asd');
    const name = component.registerForm.controls['name'];
    name.setValue('rani');
    expect(component.registerForm.invalid).toBeTruthy();

    component.register(component.registerForm);

  });
  it('email invalid and password invalid and name valid', () => {
    const email = component.registerForm.controls['Email'];
    email.setValue('ranimgggg');
    const password = component.registerForm.controls['Password'];
    password.setValue('asd');
    const name = component.registerForm.controls['name'];
    name.setValue('ranim');
    expect(component.registerForm.invalid).toBeTruthy();

    component.register(component.registerForm);

  });
});
