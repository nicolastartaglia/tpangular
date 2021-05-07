import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketServiceService } from 'src/app/shared/rocket-service.service';


@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket: Rocket = {};
  rockets: Array<Rocket> = new Array<Rocket>();

  constructor(private rocketService: RocketServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.rocketService.getAllRockets().subscribe(data => {
       console.log("recup données");
       console.log(data);
       this.rockets = data;
     });

  }

  saveRocket(){
    this.rocketService.addRocket(this.rocket).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  deleteRocket(id: any) {
    this.rocketService.deleteRocket(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
}

  rocketDetails(id: any) {
    this.router.navigate(['rocketDetails', id]);
  }

// redirige vers le composant personne.edit selon un identifiant
rocketEdit(id: any){
  this.router.navigate(['rocketEdit', id]);
}



}
