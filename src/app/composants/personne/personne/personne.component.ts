import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};
  personnes: Array<Personne> = new Array<Personne>();

  constructor(private router: Router, private personneService: PersonneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadResolve();
  }

  // reloadData(){
  //   // this.personneService.getAllPersons().subscribe(data => {
  //   //   this.personnes = data;
  //   // });

  //   // Utilisation du resolver PersonResolver
  //   // this.route.data.subscribe(data => {
  //   //   console.log('Check route resolver data');
  //   //   console.log(data);
  //   //   this.personnes = data.routeResolver;
  //   // })

  //   this.personnes = this.route.snapshot.data.routeResolver;
   
  // }

  // Enregistre un nouvel objet personne par l'appel de la methode addPerson initiliasée 
  // dans le service personne.service -> appel du chemin et de la methode POST
  savePerson(){
    this.personneService.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadResolve();
    })
  }

  // Recharge la page apres avoir recuperer les donnees de la route
  reloadResolve() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]).then(() => {
      this.personnes = this.route.snapshot.data.routeResolver;
    });
  }

  // redirige vers le composant personne.details selon un identifiant
  personDetails(id: any){
    this.router.navigate(['details', id]);
  }

  // redirige vers le composant personne.edit selon un identifiant
  personEdit(id: any){
    this.router.navigate(['edit', id]);
  }

  // Supprime unobjet personne selon un identifiant par l'appel de la methode deletePerson initiliasée 
  // dans le service personne.service -> appel du chemin et de la methode DELETE
  deletePerson(id: any) {
      this.personneService.deletePerson(id).subscribe(data => {
        console.log(data);
        this.reloadResolve();
      })
  }
}
