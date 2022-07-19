import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/modules/hero';
import { HEROES } from 'src/app/mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  constructor() { }

  selectedHero?: Hero;

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
