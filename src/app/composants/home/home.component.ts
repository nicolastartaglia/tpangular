import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Declaration d'une variable de type chaine de caractere
  title: string = 'Session Angular';

  taskStatus!: string;

  // Creation d'un objet de type Personne
  personne: Personne = new Personne(100, 'Wick', 'John');

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(200, 'Abruzzi', 'John'),
    new Personne(300, 'Doe', 'John'),
    new Personne(400, 'Wayne', 'John')
  ];

  // Creation d'un tableau d’entiers tab
  tab: number[] = [2, 3, 5, 8, 12, 15, 18];

  // Ajout d' une methode direBonjour()
  // direBonjour(){
  //   return "Bonjour Angular";
  // }

  nom = 'doe';
  couleur = 'blue';

  direBonjour = () => {
    return "Bonjour Angular";
  }

  getColor() {
    return "white";
  }

  getBackgroundColor() {
    return "red";
  }

  tasks = [
    {
      name: 'EATING',
      status: 'doing'
    },
    {
      name: 'DRINKING',
      status: 'done'
    },
    {
      name: 'SLEEPING',
      status: 'done'
    }
  ];

  getC(elt: any) {
    if (elt.status === 'done') {
      return 'green';
    }
    return;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
