import { Component, OnInit } from '@angular/core';
import {StarshipService, IShip} from '../starship.service'; // import here to use the class name in constructor
import { Observable } from 'rxjs/Observable'; // importing the Observable type only. We do the other import syntax to import the sideeffects of Observables

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  //ships: IShip[];
  ships: Observable<IShip[]>;
  constructor(ss: StarshipService) {
    //this.ships = ss.getStarships();
    // ss.getStarships().subscribe((s: IShip[]) => {
    //   this.ships = s;
    // })
    this.ships = ss.getStarships();
   }

  ngOnInit() {
  }

  logSelectedShip(ship: IShip) {
    console.log("ship selected: ", ship );
  }

}
