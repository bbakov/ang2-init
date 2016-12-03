import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';

import { ReplaySubject } from 'rxjs';

import { Menu } from './menu';

const Menues: Menu[] = [
  {id: 1, title: 'Home', href: '', active: true},
  {id: 2, title: 'News', href: 'news', active: false}
  // {id: 3, title: 'Tools', href: 'tools', active: false},
  // {id: 3, title: 'Traders', href: 'traders', active: false},
  // {id: 4, title: 'Lessons', href: 'lessons', active: false},
];


@Injectable()
export class MenuService {
  activeIndex: number = 0; 
  // menues: Menu[] = Menues; //all menues
  menues: Menu[]; //all menues

  public activeProject:ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http: Http) { 
    this.menues = [];
  }

  getAll() {
    // return this.menues;
    console.log(" . ::: service MENU ::: getALL ::: menues ::: ", this.menues);

    return this.http.get('../app/services/menu/menu.json')
        // .do(data => this.menues)
        .map(this.handleData)
        .catch(this.handleError);
  }

  handleData (res: Response) {
    let body = res.json();
    this.menues = body.data;
    console.log("fill MENU :::", this.menues, typeof this.menues);
    return body.data || { };
  }

  handleError = (err: Response | any) => {
    return Observable.throw({txt: "text"});
  }  

  setActive(index: number): void {
    console.log(this.menues, this.menues.length)
    if (this.menues.length === 0) {
      return;
    }
    this.menues[this.activeIndex].active = false;
    this.activeIndex = index;
    this.menues[this.activeIndex].active = true;  	
  }

  getActive() {
    var activeMenu;
    if (this.menues.length === 0) {
      return {title: "", href: false};
    }

    activeMenu = this.menues[this.activeIndex];
    activeMenu.index = this.activeIndex;
    return activeMenu;
  }
}