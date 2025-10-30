import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { PizzaHome } from './pizza-home/pizza-home';
import { Register } from './register/register';
import { Menu } from './menu/menu';
import { Cart } from './cart/cart';
import { PageNotFound } from './page-not-found/page-not-found';
import { Pizzadata } from './pizzadata';
import { myguardGuard } from './myguard-guard';
import { Contactus } from './contactus/contactus';

export const routes: Routes = [
    {
        path: 'home',
        component:PizzaHome
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'menu',
        component:Menu
    },
    {
        path:'cart',
        component: Cart,
        canActivate:[myguardGuard]
    },
    {
        path:'contactus',
        component:Contactus
    },
    {
        path:'**',
        component:PageNotFound,
    }
   
];
