import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "create", component: AppComponent},
    {path: "update/:id", component: AppComponent},
    {path: "delete/:id", component: AppComponent},
    {path: "**", component: AppComponent, redirectTo: ""}
];
