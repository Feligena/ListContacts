import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "create", component: AddContactComponent},
    {path: "update/:id", component: UpdateContactComponent},
    // {path: "delete/:id", component: AppComponent},
    {path: "**", component: HomeComponent, redirectTo: ""}
];
