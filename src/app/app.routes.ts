import { Routes } from '@angular/router';
import { SearchBySameTitle } from './search-by-same-title/search-by-same-title';
import { SearchByTitle } from './search-by-title/search-by-title';
import { Hub } from './hub/hub';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path: 'hub', component: Hub},
    {path: 'search-by-title', component: SearchByTitle},
    {path: 'search-by-same-title', component: SearchBySameTitle},
    {path: '', redirectTo: '/hub', pathMatch: 'full'},
    {path: '**', component: PageNotFound }
];
