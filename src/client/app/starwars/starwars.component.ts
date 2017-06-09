import { Component, OnInit } from '@angular/core';
/**
 * This class represents the lazy loaded StarWarsComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-starwars',
  templateUrl: 'starwars.component.html',
  styleUrls: ['starwars.component.css'],
})
export class StarWarsComponent implements OnInit{

  public ngOnInit(): void {
    let audio = new Audio();
    audio.src = "https://raw.githubusercontent.com/NestorPlasencia/sound/master/starwars.mp3";
    audio.load();
    audio.play();
  }
 }
