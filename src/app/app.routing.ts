import { Routes, RouterModule } from '@angular/router';
import { PeoplesListComponent } from './peoples/peoples-list/peoples-list.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PeoplesRegisterComponent } from './peoples/peoples-register/peoples-register.component';

const APP_ROUNTES: Routes = [
    {
        path: '',
        component: PeoplesListComponent
    },
    {
        path: 'new/:id',
        component: PeoplesRegisterComponent
    },
    {
        path: 'new',
        component: PeoplesRegisterComponent
    }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUNTES);
