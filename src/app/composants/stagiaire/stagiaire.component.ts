import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  // Le constructeur en Angular sert seulement à faire des injections de dependances
  constructor(private route: ActivatedRoute) { }

  // Méthode qui sera executée qud Angular aura fini d'initialiser le composant
  ngOnInit(): void {

    // 2 formes de paramètres de requetes

    // /chemin/nom/prenom
    // /chemin?nom=doe&prenom=john

    // 2 manières diffèrentes pour récupérer ces valeurs respectives

    // paramMap pour /chemin/John/Doe

    // Solution avec les snapshots(Instantané)

    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + " " + this.prenom);

    // Solution avec les observables

    // Observable : Les observables emettent des events qui seront interceptes
    // par des observateurs(observers)

    // La méthode subscribe prend en paramètre l'observateur(bloc de code)
    // qui recevra les valeurs emises par l observable

    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + " " + this.prenom);
    });

    // /chemin?nom=Wick&prenom=John

    // http://localhost:4200/stagiaire?nom=Wick&prenom=John

    // queryParams pour /chemin?nom=Wick&prenom=John -> snapshot
    // queryParamMap pour /chemin?nom=doe&prenom=john -> observables


    // Solution avec les snapshots(Instantané)

    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + " " + this.prenom);

    // Solution avec les observables

    // this.route.queryParamMap.subscribe(res => {
    //   this.nom = res.get('nom');
    //   this.prenom = res.get('prenom');
    //   console.log(this.nom + " " + this.prenom);
    // });

  }

}
