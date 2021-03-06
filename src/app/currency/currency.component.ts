import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {


  currencies = [];
  countries = [];
  names = [];
  index;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getData().subscribe(data => {
      console.log(data);
      this.currencies = data;





    });



  }

  selected(event) {
    const index = event.target.value;

    console.log(index);
    const countries = this.currencies[index].Countries[0];

    this.countries = Object.keys(countries).map(elem => ({
      'lang': elem, 'value': countries[elem]
    }));
    console.log(index);
    const names = this.currencies[index].Name;
    console.log(names);
    this.names = Object.keys(names).map(elem => ({
      'language': elem, 'name': names[elem]
    }));
    console.log(this.names);
  }



}


