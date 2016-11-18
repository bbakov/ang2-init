import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Menu } from './menu';

const Menues: Menu[] = [
  {id: 1, title: 'Home', href: '', active: true},
  {id: 2, title: 'News', href: 'news', active: false},
  {id: 3, title: 'Tools', href: 'tools', active: false},
  {id: 3, title: 'Traders', href: 'traders', active: false},
  {id: 4, title: 'Lessons', href: 'lessons', active: false},
];


@Injectable()
export class MenuService {
  activeIndex: number = 0; 
  menues: Menu[] = Menues; //all menues

  constructor(private http: Http) { }

  // getAll(): Menu[] {
  getAll() {
    // return this.menues;
    return this.http.get('../app/services/menu/menu.json')
        .do(data => console.log('server data:', data))
        .map(this.handleData)
        .catch(this.handleError);
  }

  handleData (res: Response) {
    let body = res.json();
    return body.data || { };
  }

  handleError = (err: Response | any) => {
    console.log("error Arrow func :::", err)
    return Observable.throw({txt: "text"});
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