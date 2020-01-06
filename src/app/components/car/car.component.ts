import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 255;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ["ABS", "Autopilot", "Autoparking"]
  }

}
interface Colors{
  car:string,
  salon:string;
  wheels:string
}
