import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ship-name',
  templateUrl: './ship-name.component.html',
  styleUrls: ['./ship-name.component.css']
})
export class ShipNameComponent implements OnInit {
  starShipNameGroup: FormGroup;
  constructor(fb: FormBuilder) { 
    this.starShipNameGroup = fb.group(
      {
        name: ['', [Validators.minLength(3), Validators.required]]
      }
    );

    this.starShipNameGroup.controls['name'].valueChanges
    .map(val => 'USS ' + val)
    .subscribe(val => {
      console.log('starship: ', val);
    });
  }

  ngOnInit() {
  }

  launchShip() {
    console.log("Name: ", this.starShipNameGroup.controls['name'].value);
  }

}
