import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShip } from '../starship.service';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent implements OnInit {

@Input() ship: IShip;

@Output() selectShip = new EventEmitter<IShip>(); //Output + EventEmitter; all output will be EventEmitter for short range communication between parent and child. There is another method to communicate in heirarchy

  constructor() { }

  ngOnInit() {
  }

userSelectedShip(ship: IShip) {
  this.selectShip.emit(ship);
}
}
