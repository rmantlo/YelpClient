import { Component, OnInit } from '@angular/core';
import { YelpService } from '../service/yelp.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private yelp: YelpService) { }
  searchInfo: any = {};
  displayData: any;
  endpoint: any;
  random: any = [];
  delivery: boolean;
  ratings = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.searchInfo)
    this.endpoint = `?location=${this.searchInfo.city},${this.searchInfo.state}&price=${this.searchInfo.price}`
    this.yelp.getYelp(this.endpoint).subscribe(
      data => {
        let datas: any = data;
        this.displayData = datas.businesses;
        console.log(this.displayData);
        this.pickRandom();
        this.random['rating'] = this.ratings[this.random['rating'] - 1]
        if (this.random.transactions.includes('delivery')) {
          this.delivery = true;
        }
        console.log(this.random)
      }
    );
  }
  pickRandom() {
    let someRandom = this.displayData[Math.floor(Math.random() * this.displayData.length)];
    if (someRandom.is_closed === true) {
      this.pickRandom();
      console.log('redo because closed')
    } else {
      this.random = someRandom;
      console.log('somerandom')
    }
  }
}
