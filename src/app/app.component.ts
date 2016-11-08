import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  activeMenu: number = 2;
  outputActiveMenu = "Money";
  
  title = 'Tour of Heroes';

  ngOnInit() {  }

  onChange(event) {
  	this.outputActiveMenu = event;
  }
}
