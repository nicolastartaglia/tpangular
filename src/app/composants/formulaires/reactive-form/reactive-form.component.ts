import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // Le décorateur ViewChild permet d'accéder aux éléments DOM natifs 
  // qui ont une variable de référence de modèle, ici el (declare ds le .html)
  @ViewChild('el') span!:ElementRef;

  personnes: any = [];

  // FormGroup

  // Une classe Angular
  // Composee de plusieurs objets de type FormControl

  // FormControl

  // Une classe Angular
  // Permettant d’associer un attribut de composant a un champ de
  // formulaire defini dans le template associe afin de faciliter le binding, et
  // le controle et la validation

  // personneForm = new FormGroup({
  //   // Le champ id est obligatoire
  //   id: new FormControl('', Validators.required),
  //   // Le champ nom est obligatoire et doit respecter une fonction (qu’on a preparee
  //   // pour ca) appelee checkValidatorPrenom qui exige que la
  //   // premiere lettre soit en majuscule est que le nombre de caractere soit entre 3 et 11
  //   nom: new FormControl('', [Validators.required, this.checkValidatorNom]),
  //   // Le champ prenom est aussi obligatoire et doit respecter une fonction (qu’on a preparee
  //   // pour ca) appelee checkValidatorNom qui exige que la premiere lettre soit en majuscule 
  //   prenom: new FormControl('', [Validators.required, this.checkValidatorPrenom]),

  //   // Il est possible d’imbriquer les FormGroup
  //   // Par exemple : un FormGroup adresse defini dans le FormGroup personneForm
  //   adresse: new FormGroup({
  //     rue: new FormControl('', Validators.required),
  //     ville: new FormControl('', Validators.required),
  //     codePostal: new FormControl('', Validators.required)
  //   })
  // });

  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkValidatorNom]],
    prenom: ['', [Validators.required, this.checkValidatorPrenom]],
    adresse: this.fb.group({
      rue: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      codePostal: ['', [Validators.required]]
    }),

    // FormArray
    // Defini dans FormBuilder
    // Il permet de d´ efinir un tableau de taille indeterminee de FormControl
    // Une personne peut pratiquer plusieurs sports (le nombre peut
    // varier d’une personne a une autre) => on peut utiliser FormArray
    sports: this.fb.array([])
  })

  checkValidatorPrenom(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  checkValidatorNom(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z][a-z]{2,10}/
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  // Pour afficher instantanement les sports ajoutés par l’utilisateur,
  // on doit retourner notre FormArray
  get sports(){
    return this.personneForm.get('sports') as FormArray;
  }

  get adresse() {
    return this.personneForm.get('adresse') as FormGroup;
  }

  get sports2(){
    return this.personneForm.get('sports2') as FormArray;
  }
  // On ajoute a notre tableau un nouvel element vide pour que
  // l’utilisateur puisse saisir un nouveau sport.
  // Le sport ajoute par l’utilisateur est lie directement a notre FormArray
  ajouterSport(){
    this.sports.push(this.fb.group({
      libelle: [''],
      // nested form array, you could also add a form group initially
      sports2: this.fb.array([])
    }));
  }

  addNewSport() {
    this.sports2.push(
      this.fb.group({
        libelle: ['']
    }))
  }

  deleteProject(i: number) {
    this.sports2.removeAt(i);
  }

  // Supprime un sport selon son son idex ds le tableau
  supprimerSport(i: number){
    this.sports.removeAt(i);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // La methode setValue() permet d’initialiser, ou modifier les
    // valeurs de formulaire : il faut preciser une valeur pour chaque
    // FormControl du FormGroup

    // this.personneForm.setValue({id:1, nom:'Wick', prenom:'John'});

    // La methode patchValue() permet d’initialiser, ou modifier
    // quelques (ou tous les) FormControl du FormGroup

    this.personneForm.patchValue({
      prenom: 'Jacques',
      adresse: {
        codePostal: '13000'
      }
    });
  }

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    // Hide Sport section 
    //this.span.nativeElement.setAttribute("hidden", true);
    //ou
    this.sports.clear();
    // Affiche toute la form
    console.log(this.personneForm.value);
    // Affiche seulement la valeur de nom
    console.log(this.personneForm.controls.nom.value);
    console.log(this.personneForm.controls.sports.value);
    //ou
    console.log(this.personneForm.get('nom')?.value);
    // vide les champs du formulaire personneForm
    this.personneForm.reset();
  }

}
