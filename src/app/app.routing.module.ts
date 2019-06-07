import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resolve } from 'q';

import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoListResolver } from './components/photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {


}