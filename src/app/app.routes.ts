import { Routes } from '@angular/router';
import { LoginComponent } from './user-area/login/login.component';
import { RegisterComponent } from './user-area/register/register.component';

export const routes: Routes = [
    {path: 'app-login', component: LoginComponent},
    {path: 'app-register', component: RegisterComponent}
];
