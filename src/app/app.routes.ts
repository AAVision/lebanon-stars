import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContributorsComponent } from './components/contributors/contributors.component';

export const routes: Routes = [
    { path: '', title: "Home page", component: HomeComponent },
    { path: 'about-us', title: "About Us", component: AboutusComponent },
    { path: 'contributors', title: "Contributors", component: ContributorsComponent },
];
