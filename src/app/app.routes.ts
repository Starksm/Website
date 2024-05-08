import {Routes} from '@angular/router';
import {Section1Component} from "./pages/section1/section1.component";
import {Section2Component} from "./pages/section2/section2.component";

export const routes: Routes = [
  {path: 'section1', component: Section1Component},
  {path: 'section2', component: Section2Component},
  // {path: 'section3', component: Section3Component},
  // {path: 'section4', component: Section4Component},
  {path: '', redirectTo: '/section1', pathMatch: 'full'}
];
