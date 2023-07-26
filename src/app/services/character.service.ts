import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://swapi.dev/api/people';
   
  constructor(private httpClient: HttpClient) { }
  
  getPeople(){
    return this.httpClient.get(this.url);
  }

  getPerson(id: string){
    return this.httpClient.get(this.url +'/' + id);
  }
}
