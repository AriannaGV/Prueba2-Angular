import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';

import { SidderComponent } from './shared/sidder/sidder.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ChartsGraphsComponent } from './componentes/charts-graphs/charts-graphs.component';
import { WidgetsComponent } from './componentes/widgets/widgets.component';
import { TablesComponent } from './componentes/tables/tables.component';
import { FullWidthComponent } from './componentes/full-width/full-width.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { ButtonsComponent } from './componentes/buttons/buttons.component';
import { ElementsComponent } from './componentes/elements/elements.component';
import { AddonsComponent } from './componentes/addons/addons.component';
import { ValidationComponent } from './componentes/validation/validation.component';
import { WizardComponent } from './componentes/wizard/wizard.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { CalendarComponent } from './componentes/calendar/calendar.component';
import { ChapoptionComponent } from './componentes/chapoption/chapoption.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    
    SidderComponent,
    HeaderComponent,
    DashboardComponent,
    ChartsGraphsComponent,
    WidgetsComponent,
    TablesComponent,
    FullWidthComponent,
    FormsComponent,
    ButtonsComponent,
    ElementsComponent,
    AddonsComponent,
    ValidationComponent,
    WizardComponent,
    GalleryComponent,
    CalendarComponent,
    ChapoptionComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
