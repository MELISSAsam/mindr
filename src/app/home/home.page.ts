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
      name: 'Ana, 24',
      bio: 'Amante de los gatos, la fotografía y el chocolate.',
      img: 'assets/profile1.jpg',
    },
    {
      name: 'Valeria, 22',
      bio: 'Me gustan los atardeceres y las cosas simples.',
      img: 'assets/profile2.jpg',
    },
    {
      name: 'Camila, 27',
      bio: 'Bailarina, gym y café sin azúcar ❤️',
      img: 'assets/profile3.jpg',
    },
  ];
}
