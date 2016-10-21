import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SelectFlightPageComponent} from './select-flight-page/select-flight-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'a',
    component: SelectFlightPageComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
