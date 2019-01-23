import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';
import { EditComponent } from './edit/edit.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'todos', component: TodosComponent },
{ path: 'currency', component: CurrencyComponent },
{ path: 'edit/:index', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
