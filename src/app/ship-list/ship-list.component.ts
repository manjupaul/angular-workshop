import { Component, OnInit } from '@angular/core';
import {StarshipService, IShip} from '../starship.service'; // import here to use the class name in constructor
import { Observable } from 'rxjs/Observable'; // importing the Observable type only. We do the other import syntax to import the sideeffects of Observables
import 'rxjs/add/operator/do';

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  //ships: IShip[];
  ships: Observable<IShip[]>;
  length: number;
  constructor(ss: StarshipService) {
    //this.ships = ss.getStarships();
    // ss.getStarships().subscribe((s: IShip[]) => {
    //   this.ships = s;
    // })
    this.ships = ss.getStarships().do(x => this.length = x.length);
    //this.ships.map(x => this.length = x.length);
    console.log("-----------------");
    console.log(this.length);
   }

  ngOnInit() {
  }

  logSelectedShip(ship: IShip) {
    console.log("ship selected: ", ship );
  }

}
