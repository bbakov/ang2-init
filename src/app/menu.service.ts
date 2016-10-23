import { Injectable } from '@angular/core';

import { Menu } from './menu';

const Menues: Menu[] = [
  {id: 1, title: 'Home', href: 'home', active: true},
  {id: 2, title: 'News', href: 'news', active: false},
  {id: 3, title: 'Money', href: 'money', active: false},
  {id: 4, title: 'Resources', href: 'resources', active: false},
];


@Injectable()
export class MenuService {
  activeIndex: number = 0; 
  menues: Menu[] = Menues; //all menues

  constructor() { }

  getAll(): Menu[] {
    return this.menues;
  }

  setActive(index: number): void {
	  this.menues[this.activeIndex].active = false;

  	this.activeIndex = index;
	  this.menues[this.activeIndex].active = true;  	
  }

  getActive() {
    var activeMenu;
    activeMenu = this.menues[this.activeIndex];
    activeMenu.index = this.activeIndex;

    return activeMenu;
  }
}