import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url: string;
  public numero: number;
  public min:number=0;
  public max:number=155;


  constructor(private http: HttpClient){
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    // this.url = "https://dog.ceo/api/breeds/image/random";

  }


  getInformacion(): Observable<any>{
    this.numero = Math.round(Math.random()*155);
    console.log(this.numero);
    
    return this.http.get(this.url+this.numero);

  }

}
