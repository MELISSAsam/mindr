import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {}
