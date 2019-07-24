import  {  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { LoginComponent } from './components/login/login.component';
import { CheckcredentialsComponent } from './components/checkcredentials/checkcredentials.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'musica', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'biblioteca', component: BibliotecaComponent},
    { path: 'check/:callback', component: CheckcredentialsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
]