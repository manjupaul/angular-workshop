import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IShip {
  name: string,
  FTL: string,
  weapons: string[],
  fighters: string | boolean,
  universe: string,
  //fighterTypes: IFighter[]
}

@Injectable()
export class StarshipService {
  // private ships = [{
  //   "name" : "Constitution",
  //   "FTL": "Wrap Drive",
  //   "weapons" : ["Phasers", "Proton Torpedoes"],
  //   "fighters": false,
  //   "universe": "Star Trek"
  // },
  // {
  //   "name" : "Star Destroyer",
  //   "FTL": "Hyper Drive",
  //   "weapons" : ["Laser Cannons", "Ion Cannons"],
  //   "fighters": "Fighter 1",
  //   "universe": "Star Wars"
  // },
  // {
  //   "name" : "Battlestar",
  //   "FTL": "Jump Drive",
  //   "weapons" : ["Flak Cannons", "Nuclear Missiles"],
  //   "fighters": "Fighter 2",
  //   "universe": "Universe 2"
  // }
  // ]
  constructor(private http: Http) { }

  getStarships() {
    //return this.ships;
    return this.http.get('/assets/ships.json').map((res: Response) => res.json());
  }
}
