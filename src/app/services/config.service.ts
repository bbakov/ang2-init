import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  //main menu Start position
  rootMenu: any = {
  	id: 1,
  	title: 'Platforms'
  }

  constructor() { }

  mainMenu() {
  	return this.rootMenu;
  }

}