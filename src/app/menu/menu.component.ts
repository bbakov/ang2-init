import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ MenuService ]
})

export class MenuComponent implements OnInit {
  @Input() cfgActiveMenu = 0;

  @Output() changeMenu = new EventEmitter<string>();

  menues: Menu[];
  constructor(private service: MenuService) { }

  ngOnInit() {
    if (this.cfgActiveMenu) {
      this.service.setActive(this.cfgActiveMenu);
    }

  	this.getMenues();
  }

  onClick(menuIndex) {
  	this.service.setActive(menuIndex);
  	this.getMenues();

    this.changeMenu.emit(this.getTitle());
  }

  getMenues() {
  	this.menues = this.service.getAll();	
  }

  getTitle(): string {
    return this.service.getActive().title;
  }
}