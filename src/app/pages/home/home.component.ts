import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menActive = false;
  womenActive = false;
  unisexActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleMenActive(): void {
    this.menActive = !this.menActive;
  }

  handleWomenActive(): void {
    this.womenActive = !this.womenActive;
  }

  handleUnisexActive(): void {
    this.unisexActive = !this.unisexActive;
  }

}
