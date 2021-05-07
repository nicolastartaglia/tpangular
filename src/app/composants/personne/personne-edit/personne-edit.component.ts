import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-edit',
  templateUrl: './personne-edit.component.html',
  styleUrls: ['./personne-edit.component.css']
})
export class PersonneEditComponent implements OnInit {

  id!: number;
  personne: Personne = {};

  constructor(private personneService: PersonneService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getPerson(this.id).subscribe(data => {
      console.log("On init :" + data[0]);
      this.personne = data[0];
    })
  }

  // Met a jour un objet personne selon son identifiant par l'appel de la methode updatePerson initiliasée 
  // dans le service personne.service -> appel du chemin et de la methode POST
  editPerson() {
    this.personneService.updatePerson(this.id, this.personne).subscribe(data => {
      console.log("Edit person :" + data);
    })
    this.router.navigateByUrl('personne');
  }

}
