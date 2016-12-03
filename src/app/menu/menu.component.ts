import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MenuService } from '../services/menu/menu.service';
import { Menu } from '../services/menu/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ MenuService ]
})

export class MenuComponent implements OnInit {
  @Input() cfgActiveMenu = 0;

  @Output() changeMenu = new EventEmitter<string>();

  routeBind: any;

  menues: Menu[];
  constructor (
    private service: MenuService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

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
    console.log(this.service.getActive(), this.service.getActive().href);

    let href;
    href = this.service.getActive().href;
    console.log(href)
    href && this.router.navigate([href]);
    // this.router.navigate(['/detail', menuIndex]);
  }

  getMenues() {
    this.service.getAll().subscribe(
      data => this.menues = data,
      error => console.error("ERROR !!! :::", error));
  }

  getTitle(): string {
    return this.service.getActive().title;
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.routeBind.unsubscribe();
  }
}