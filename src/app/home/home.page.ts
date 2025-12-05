import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  profiles = [
    {
      name: 'Anthony Sagaby, 24',
      bio: 'Amante del diseño, los deportes y la fotografía.',
      img: 'assets/icon/AnthonySagaby.png'
    },
    {
      name: 'Josue Albán, 23',
      bio: 'Desarrollador frontend y apasionado por la tecnología.',
      img: 'assets/icon/JosueAlban.png'
    },
    {
      name: 'Melissa Chuqui, 22',
      bio: 'Creativa, amante de la ilustración digital y el estilo kawaii.',
      img: 'assets/icon/MelissaChuqui.png'
    }
  ];

  currentIndex = 0;
  favorites: any[] = [];

  get currentProfile() {
    return this.profiles[this.currentIndex];
  }

  dislike() {
    // Pasar al siguiente perfil
    this.currentIndex++;

    // Si no hay más perfiles, reiniciar (o lo que quieras)
    if (this.currentIndex >= this.profiles.length) {
      this.currentIndex = 0;
    }
  }

  like() {
    this.favorites.push(this.currentProfile);
    this.dislike();
  }

}
