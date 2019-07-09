import  {  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'musica', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
]