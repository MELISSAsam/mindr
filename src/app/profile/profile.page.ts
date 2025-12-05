import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  perfiles = [
    {
      nombre: "Anthony",
      edad: 22,
      desc: "Amante de los gatos, juegos retro y leer de noche.",
      img: "assets/icon/AnthonySagaby.png"
    },
    {
      nombre: "Carlos",
      edad: 19,
      desc: "Le gusta el gym y los perros.",
      img: "assets/icon/Carlos.png"
    },
    {
      nombre: "Sofía",
      edad: 20,
      desc: "Fan del anime y café.",
      img: "assets/icon/Sofia.png"
    }
  ];

  indexActual = 0;
  favoritos: any[] = [];

  get perfilActual() {
    return this.perfiles[this.indexActual];
  }

  siguientePerfil() {
    if (this.indexActual < this.perfiles.length - 1) {
      this.indexActual++;
    } else {
      this.indexActual = 0; // vuelve al inicio
    }
  }

  rechazar() {
    this.siguientePerfil();
  }

  aceptar() {
    this.favoritos.push(this.perfilActual);
    console.log("Guardado en favoritos:", this.perfilActual);
    this.siguientePerfil();
  }

}
