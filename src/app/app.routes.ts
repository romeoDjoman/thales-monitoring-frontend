import { Routes } from '@angular/router';
import { EquipementComponent } from './features/equipement/equipement.component';

export const routes: Routes = [
    { path: 'equipements', component: EquipementComponent },
    { path: '', component: EquipementComponent },
    { path: '**', redirectTo: 'equipements', pathMatch: 'full' }
    
];
