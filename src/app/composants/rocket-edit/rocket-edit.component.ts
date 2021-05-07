import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketServiceService } from 'src/app/shared/rocket-service.service';

@Component({
  selector: 'app-rocket-edit',
  templateUrl: './rocket-edit.component.html',
  styleUrls: ['./rocket-edit.component.css']
})
export class RocketEditComponent implements OnInit {

  id!: number;
  rocket: Rocket = {};

  constructor(private rocketService: RocketServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID =" +  this.id );
    this.rocketService.getRocket(this.id).subscribe(data => {
      console.log("On init :" + data);
      this.rocket = data;
    });
  }

  editRocket() {
    this.rocketService.updateRocket(this.id, this.rocket).subscribe(data => {
      console.log("Edit rocket :" + data);
    })
    this.router.navigateByUrl('rocket');
  }


}
