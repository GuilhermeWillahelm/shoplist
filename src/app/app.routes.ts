import { Routes } from '@angular/router';
import { LoginComponent } from './user-area/login/login.component';
import { RegisterComponent } from './user-area/register/register.component';

export const routes: Routes = [
    {path: 'appLogin', component: LoginComponent},
    {path: 'appRegister', component: RegisterComponent}
];
