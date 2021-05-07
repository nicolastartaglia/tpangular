import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: number;
  personne: Personne = {};

  constructor(private router: ActivatedRoute, private personneService: PersonneService, private route: Router) { }

  ngOnInit(): void {

    // Procedure de recuperation de donnees par la route -> Resolver

    // this.router.data.subscribe(data => {
    //   console.log('Check route resolver data');
    //   console.log(data);
    //   this.personne = data.personne;
    // })

    // Ou

    this.personne = this.router.snapshot.data['personne'];

    // Ou

    // this.personne = this.router.snapshot.data.personne;

    // Procedure de recuperation de donnees par le service

    // this.id = this.route.snapshot.params['id'];
    // this.personneService.getPerson(this.id).subscribe(data =>{
    //   console.log(data);
    //   this.personne = data[0];
    // })
  }

  // Redirige vers le composant personne
  backToPersonList(){
    // this.router.navigateByUrl('/personne');
    this.route.navigate(['/personne']);
  }

}
