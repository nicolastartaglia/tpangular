import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { RocketComponent } from './composants/rocket/rocket.component';
import { RocketDetailsComponent } from './composants/rocket-details/rocket-details.component';
import { RocketEditComponent } from './composants/rocket-edit/rocket-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    ErrorComponent,
    TemplateFormComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    TpFormComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    PersonneEditComponent,
    RocketComponent,
    RocketDetailsComponent,
    RocketEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
