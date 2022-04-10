import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.css']
})
export class ContinentsPageComponent implements OnInit {

  continent: string= '';
  constructor(private apiService: ApiService){}

  Africa(){
    this.continent = 'Africa'
    this.apiService.getCountriesByContinent(this.continent);
  }
  America(){
    this.continent = 'Americas'
    this.apiService.getCountriesByContinent(this.continent);

  }
  Asia(){
    this.continent = 'Asia'
    this.apiService.getCountriesByContinent(this.continent);
  }
  Europe(){
    this.continent = 'Europe'
    this.apiService.getCountriesByContinent(this.continent);
  }
  Australia(){
    this.continent = 'Oceania'
    this.apiService.getCountriesByContinent(this.continent);
  }


  ngOnInit(): void {
  }

}
