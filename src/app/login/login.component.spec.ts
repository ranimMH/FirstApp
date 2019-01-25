import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
      ,
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component).toBeDefined();

  });


  it('email and password valid', () => {
    const email = component.loginForm.controls['Email'];
    email.setValue('ranim@gmail.com');
    const password = component.loginForm.controls['Password'];
    password.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
    component.loginUser(component.loginForm);

  });


  it('email invalid and password valid', () => {
    const email = component.loginForm.controls['Email'];
    email.setValue('emailInValid');
    const password = component.loginForm.controls['Password'];
    password.setValue('123456');
    expect(component.loginForm.controls['Email'].invalid).toBeTruthy();
    password.setValue('123456');
    component.loginUser(component.loginForm);

  });
  it('email valid and password invalid', () => {
    const email = component.loginForm.controls['Email'];
    email.setValue('ranim@gmail.com');
    const password = component.loginForm.controls['Password'];
    password.setValue('asd');
    expect(component.loginForm.controls['Password'].invalid).toBeTruthy();

    component.loginUser(component.loginForm);

  });
  it('email invalid and password invalid', () => {
    const email = component.loginForm.controls['Email'];
    email.setValue('emailinvalid');
    const password = component.loginForm.controls['Password'];
    password.setValue('qqq');
    expect(component.loginForm.invalid).toBeTruthy();
    component.loginUser(component.loginForm);

  });
  it('email  and password invalid test backend', () => {
    const email = component.loginForm.controls['Email'];
    email.setValue('ranim@gmail.com');
    const password = component.loginForm.controls['Password'];
    password.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
    component.loginUser(component.loginForm);

  });

});
