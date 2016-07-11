import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})

export class NewsComponent implements OnInit {
  counter = 0;
  title = "< News section load corectly >";

  ngOnInit () {
  	console.log("pass throught onInit");
  }

  handleNews() {
  	this.counter += 1;
  	this.title = "news button click: " + this.counter;
  }
}
