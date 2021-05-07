import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  personnes:Array<Personne> = [];
  personne: Personne = {};

  nom = "";


  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne(myForm: NgForm){
    this.personnes.unshift({ ...this.personne });
    // this.personne.nom = '';
    // this.personne.prenom = '';
    myForm.form.markAsPristine();
    myForm.form.reset();
    console.log(this.personnes);
  }

  // supprimerPersonne(personne: Personne) {
  //   const index: number = this.personnes.indexOf(personne);
  //   this.personnes.splice(index, 1);
  // }

  supprimerP(index: any) {
    this.personnes.splice(index, 1);
  }

// Plusieurs formes de binding

// interpolation  : permet de recuperer la valeur d’un
// attribut declaree dans le .component.ts

// [ one way binding ] : permet aussi de recuperer la valeur
// d’un attribut declaree dans le .component.ts

// ( event binding ) : permet au .component.ts de
// recuperer des valeurs passees par le .component.html

// interpolation est un raccourci de [ one way
// binding ]
// <p [textContent]= "result"></p>
// <p> {{ result }} </p>

// Il est possible de combiner one way binding et event binding

// Resultat : two way binding

// Un changement de valeur dans .component.ts sera apercu
// dans .component.html et un changement dans
// .component.html sera recu dans .component.ts

// Pour la liaison bidirectionnelle, il nous faut la propriete ngModel

}
