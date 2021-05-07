import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';
import { HomeComponent } from './composants/home/home.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { PersonDetailsResolver } from './resolvers/person-details.resolver';
import { PersonResolver } from './resolvers/person.resolver';
import { RocketComponent} from './composants/rocket/rocket.component';
import { RocketDetailsComponent } from './composants/rocket-details/rocket-details.component';
import { RocketEditComponent } from './composants/rocket-edit/rocket-edit.component';

const routes: Routes = [
  // localhost:4200/
  { path: 'home', component: HomeComponent },
  // localhost:4200/stagiaire
  { path: 'stagiaire', component: StagiaireComponent },
  // localhost:4200/stagiaire/John/Doe
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  // localhost:4200/template-form
  { path: 'template-form', component: TemplateFormComponent },
  // localhost:4200/reactive-form
  { path: 'reactive-form', component: ReactiveFormComponent },
  // localhost:4200/adresse
  { path: 'adresse', component: AdresseComponent },
  // localhost:4200/adresse/Nice/06000
  { path: 'adresse/:ville/:codePostal', component: AdresseComponent },
  // localhost:4200/calculette
  { path: 'calculette', component: CalculetteComponent },
  // localhost:4200/tp-form
  { path: 'tp-form', component: TpFormComponent },
  // localhost:4200/personne
  // On associe un resolver a la route /personne
  { path: 'personne', runGuardsAndResolvers: 'always', component: PersonneComponent, resolve: { routeResolver: PersonResolver } },

  { path: 'rocket', component: RocketComponent},
  { path: 'rocketDetails/:id', component: RocketDetailsComponent},
  { path: 'rocketEdit/:id', component: RocketEditComponent},


  // localhost:4200/details/:id
  { path: 'details/:id', component: PersonneDetailsComponent ,  resolve:{
    personne : PersonDetailsResolver}  },
  // localhost:4200/edit/:id
  { path: 'edit/:id', component: PersonneEditComponent },
  // localhost:4200/error
  { path: 'error', component: ErrorComponent },
  // pathMatch = "full" signifie que tout chemin d url doit correspondre
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // On affichera error.component en cas de chemin inexistant
  { path: '**', redirectTo: '/error' },
];

//  enableTracing: true permet de garder une trace de la recherche d’un chemin (pour
//  le debogage).
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
