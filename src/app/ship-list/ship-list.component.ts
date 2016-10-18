import { Component, OnInit } from '@angular/core';
import {StarshipService, IShip} from '../starship.service'; // import here to use the class name in constructor

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships: IShip[];
  constructor(ss: StarshipService) {
    //this.ships = ss.getStarships();
    ss.getStarships().subscribe((s: IShip[]) => {
      this.ships = s;
    })
   }

  ngOnInit() {
  }

  logSelectedShip(ship: IShip) {
    console.log("ship selected: ", ship );
  }

}
