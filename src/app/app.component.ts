import { Component } from '@angular/core';

import { NewsComponent } from './news/news.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NewsComponent]
})

export class AppComponent {
  
  title = 'App works!';

  form = Array();
  
  constructor () {
  	console.log("constructor >>>");

  }
}
