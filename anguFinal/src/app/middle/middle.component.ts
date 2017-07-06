import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  providers: [NgbCarouselConfig]
})
export class MiddleComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 

  	config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;

	}

  ngOnInit() {
  }

}
