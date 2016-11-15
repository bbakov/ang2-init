import { Component, OnInit } from '@angular/core';

import { ConfigService } from './services/config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConfigService ]
})

export class AppComponent implements OnInit {
  activeMenu: number;
  outputActiveMenu: string;
  
  title = 'Tour of Heroes';

  constructor (private cfgService: ConfigService) { }

  ngOnInit() { 
    var mainMenu = this.cfgService.mainMenu();
    this.activeMenu = mainMenu.id;
    this.outputActiveMenu = mainMenu.title;
  }

  onChange(event) {
  	this.outputActiveMenu = event;
  }
}
