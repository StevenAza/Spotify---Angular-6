import  {  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'musica', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
]