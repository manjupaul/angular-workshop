import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(title: Title, private route: ActivatedRoute) {
    console.log("setting title");
    title.setTitle("Welcome");

    this.route.params.subscribe(params => {
      console.log("Params: ", params);
      console.log("Welcoming " + params['who']);
    });
   }

  ngOnInit() {
  }

}
