import { Injectable } from '@angular/core';

import { News } from './news'

const listNews: News[] = [
  {id: 1, title: 'White House says Michelle Obama may be Clinton’s top advocate', href: 'home', text: '“Based on the strong support and deep respect that people across the country have for her, based on the compelling personal argument that she’s been making in support of secretary Clinton, and she’s also quite talented in her own right at delivering a speech, and those things I do think combine to make her a very powerful advocate for secretary Clinton — and probably the most powerful advocate that secretary Clinton has,” Earnest told reporters at his daily briefing.'},
  {id: 2, title: 'Uber CEO Believes Autonomous Vehicles Won\'t Replace Drivers Anytime Soon', href: 'news', text: 'Kalanick believes that in its first stage, Otto\'s primary purpose is to selling self-driving hardware kits that truckers could retrofit onto their rigs by themselves. Use of that hardware would require drivers to remain behind the wheel of the truck, but for the most part, the trucker could leave the rig and Otto\'s tech to make on-road decisions. At least it will be that way until federal autonomous car regulation changes.'},
  {id: 3, title: 'Cyber attacks disrupt PayPal, Twitter, other sites', href: 'money', text: 'The attackers used hundreds of thousands of internet-connected devices that had previously been infected with a malicious code that allowed them to cause outages that began in the Eastern United States and then spread to other parts of the country and Europe.'},
  {id: 4, title: 'Hyperreal animal paintings', href: 'resources', text: 'From intricately detailed portraits of a pack of wild dogs to a tender picture of a mother cheetah and her cubs, these paintings are the work of talented artist Leon Fouche. Leon is also a photographer and has captured images of animals, including Africa\'s "Big Five," at game reserves across South Africa.'},
];

@Injectable()
export class NewsService {
  listNews: News[] = listNews; //all menues

  constructor() { }

  getAll(): News[] {
    return this.listNews;
  }

}
