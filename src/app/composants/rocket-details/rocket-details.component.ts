import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketServiceService } from 'src/app/shared/rocket-service.service';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  id!: number;
  rocket: Rocket = {};

  constructor(private rocketService: RocketServiceService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log("ID =" + this.id)
    this.rocketService.getRocket(this.id).subscribe(data =>{
      console.log("données");
      console.log(data);
      this.rocket = data;
    });
  }

  backToRocketList(){
    // this.router.navigateByUrl('/personne');
    this.route.navigate(['/rocket']);
  }
}
