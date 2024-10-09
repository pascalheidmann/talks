import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'slow',
        loadComponent: () => import('./pages/complex-and-slow/complex-and-slow.component').then(m => m.ComplexAndSlowComponent),
    },
    {
        path: 'slow-with-changedetection',
        loadComponent: () => import('./pages/slow-but-change-detection/slow-but-change-detection.component').then(m => m.SlowButChangeDetectionComponent),
    }
];
