import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;

  selectedCountry:Country | null = null;

  newCountries : Country[] = [];
  ContinentCountries: Country[]= [];


  constructor(private routerService: Router) { }

  getCountries(name: string): Observable<any[]>{
    if (name.trim() == ''){
      return of (this.countries);
    }
    else{
    this.newCountries = this.countries.filter((countri) => {

      return countri?.name?.common?.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.newCountries);
    }
  }
  getCountriesByContinent(continent: string): Observable<any[]>{
    this.countries = COUNTRIES;
    this.routerService.navigate(['/countries', continent]);
    this.ContinentCountries = this.countries.filter((country)=>{
      return country.region?.toLowerCase() === continent.toLowerCase();
    })
    this.countries = this.ContinentCountries;
    return of (this.newCountries);
  }

  sendCountry(country : Country){
    this.selectedCountry = country;
  }
  receiveCountry(){
    return this.selectedCountry;
  }
  startingCountries(){
    this.countries = COUNTRIES;
  }
}
