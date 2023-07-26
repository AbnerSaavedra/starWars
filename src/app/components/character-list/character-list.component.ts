import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  characters:any;
  
  constructor(private service:CharacterService) {}
  
  ngOnInit() {
      this.service.getPeople()
        .subscribe((response: any) => {  

          this.characters = response.results.filter((data: any) => Number(this.getCharacterId(data.url)) < 7);;
        });
  }

  getCharacterId(url: string){
    console.log(url.substring(29, url.length - 1));
    return url.substring(29, url.length - 1);
  }
}
