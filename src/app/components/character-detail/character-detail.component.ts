import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent{

  public id: any;
  public characterDetail: any

  constructor(private rutaActiva: ActivatedRoute, 
    private characterService: CharacterService) { 

    this.id = this.rutaActiva.snapshot.paramMap.get('id');
    console.log("ID: ", this.id)

    this.characterService.getPerson(this.id).subscribe(response =>{
      this.characterDetail = response;
      console.log('Character detail: ', this.characterDetail)
    })
  }

  
}
