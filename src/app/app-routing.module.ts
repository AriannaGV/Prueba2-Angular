import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AddonsComponent } from './componentes/addons/addons.component';
import { ButtonsComponent } from './componentes/buttons/buttons.component';
import { CalendarComponent } from './componentes/calendar/calendar.component';
import { ChapoptionComponent } from './componentes/chapoption/chapoption.component';
import { ChartsGraphsComponent } from './componentes/charts-graphs/charts-graphs.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ElementsComponent } from './componentes/elements/elements.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { FullWidthComponent } from './componentes/full-width/full-width.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { LoginComponent } from './componentes/login/login.component';
import { TablesComponent } from './componentes/tables/tables.component';
import { ValidationComponent } from './componentes/validation/validation.component';
import { WidgetsComponent } from './componentes/widgets/widgets.component';
import { WizardComponent } from './componentes/wizard/wizard.component';

const router: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'button', component: ButtonsComponent},
  {path: 'addons', component: AddonsComponent},
  {path: 'charts-graphs', component: ChartsGraphsComponent},
  {path: 'elements', component: ElementsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'full-width', component: FullWidthComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'wizard', component:WizardComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'chatoption', component: ChapoptionComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'login', component:LoginComponent},
  
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},

];

@NgModule({
  declarations: [],
  imports:[ RouterModule.forRoot(router)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
