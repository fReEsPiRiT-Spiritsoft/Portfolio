import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  projects = [
    {
      title: 'El Pollo Loco',
      description: 'A jump, run, and throw game, based on vanilla JavaScript with object-oriented programming. Help Pepe through the Mexican desert, fight against chickens, and win the game.',
      image: 'assets/img/polo-loco.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://patrick-schmidt.info/polo/',
      codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/polo-loco'
    },
    {
      title: 'Pokedex',
      description: 'A Pokédex based on the PokéAPI with various features. Choose between card view and arena view, all Pokémon come with their own sounds. Discover the world of Pokémon in my unique Pokédex.',
      image: 'assets/img/pokex-laptop.png',
      tech: ['JavaScript', 'CSS', 'REST API'],
      liveUrl: 'https://patrick-schmidt.developerakademie.net/pokedex/',
      codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/pokedex'
    },
    {
      title: 'Windows Clone',
      description: 'A website that simulates Windows, featuring a file system, Wi-Fi, settings, browser, editor, code editor, terminal, games, and more.',
      image: 'assets/img/windows-laptop.png',
      tech: ['JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://patrick-schmidt.info/windows',
      codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/Website-im-Windows-Style'
    },
    
  ];
}