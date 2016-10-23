import { Component, OnInit, Input } from '@angular/core';

import { NewsService } from '../news.service';
import { News } from '../news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ NewsService ]
})
export class NewsComponent implements OnInit {
  @Input() inputActiveMenu;

  activeMenu: any = "Money";

  activeNews: News;
  listNews: News[];

  constructor(private service: NewsService) { }

  ngOnInit() {
  	this.getNews();
  }

  getNews() {
  	this.listNews = this.service.getAll();	
  }

  onClick(newsIndex) {
  	console.log(" handle CLICK :::");
  	this.activeNews = this.listNews[newsIndex];
  }

}