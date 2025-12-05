import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ProfilePage {
  
  // ============================
  // VARIABLES DEL PERFIL (DATOS)
  // ============================

  initials = 'AS';
  avatarPreview: string | null = null;

  fullName = 'Anthony Sagbay';
  age: number | null = 26;
  gender: 'masculino' | 'femenino' | 'otro' | null = null;

  role: 'tutor' | 'estudiante' = 'tutor';
  institution = 'Universidad de Antioquia';

  bio =
    'Apasionado por enseñar programación y matemáticas de forma práctica y divertida.';

  subjects: string[] = ['Matemáticas', 'Programación'];

  level:
    | 'basico'
    | 'intermedio'
    | 'avanzado'
    | 'refuerzo'
    | 'examenes' = 'intermedio';

  experienceYears: number = 2;

  allDays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  availableDays: string[] = ['Lunes', 'Miércoles', 'Viernes'];

  fromTime = '18:00';
  toTime = '20:00';

  location = 'Quito, Ecuador';

  modality: 'online' | 'presencial' | 'hibrido' = 'online';

  price: number | null = 8;

  languages: string[] = ['Español', 'Inglés'];

  links = '';

  formMessage = '';
  formStatus: 'success' | 'error' | '' = '';

  constructor(private toastCtrl: ToastController) {}

  // ============================
  //       MANEJO DE AVATAR
  // ============================

  selectAvatar() {
    const input = document.getElementById('avatarInput') as HTMLInputElement;
    input?.click();
  }

  onAvatarSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    // Validar tamaño (opcional)
    if (file.size > 5 * 1024 * 1024) {
      this.showToast('La imagen supera los 5MB.');
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  removeAvatar() {
    this.avatarPreview = null;
    const input = document.getElementById('avatarInput') as HTMLInputElement;
    if (input) input.value = '';
  }

  // ============================
  //       TAGS (MATERIAS)
  // ============================

  addSubject(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    if (!this.subjects.includes(value)) this.subjects.push(value);

    input.value = '';
  }

  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }

  // ============================
  //        IDIOMAS
  // ============================

  addLanguage(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    if (!this.languages.includes(value)) this.languages.push(value);

    input.value = '';
  }

  removeLanguage(index: number) {
    this.languages.splice(index, 1);
  }

  // ============================
  //       DISPONIBILIDAD
  // ============================

  toggleDay(day: string) {
    if (this.availableDays.includes(day)) {
      this.availableDays = this.availableDays.filter((d) => d !== day);
    } else {
      this.availableDays.push(day);
    }
  }

  // ============================
  //        VALIDACIÓN GENERAL
  // ============================

  validate(): boolean {
    this.formStatus = '';
    this.formMessage = '';

    if (!this.fullName?.trim()) {
      return this.setError('Ingresa tu nombre.');
    }

    if (!this.bio?.trim()) {
      return this.setError('Escribe una biografía corta.');
    }

    if (this.subjects.length === 0) {
      return this.setError('Agrega al menos una materia.');
    }

    if (this.availableDays.length === 0) {
      return this.setError('Selecciona al menos un día disponible.');
    }

    if (!this.fromTime || !this.toTime || this.fromTime >= this.toTime) {
      return this.setError('Revisa el rango de horas.');
    }

    return true;
  }

  setError(msg: string) {
    this.formStatus = 'error';
    this.formMessage = msg;
    return false;
  }

  // ============================
  //       GUARDAR PERFIL
  // ============================

  saveProfile() {
    if (!this.validate()) return;

    const payload = {
      fullName: this.fullName,
      age: this.age,
      gender: this.gender,
      role: this.role,
      institution: this.institution,
      bio: this.bio,
      subjects: this.subjects,
      level: this.level,
      experienceYears: this.experienceYears,
      availableDays: this.availableDays,
      fromTime: this.fromTime,
      toTime: this.toTime,
      location: this.location,
      modality: this.modality,
      price: this.price,
      languages: this.languages,
      links: this.links.split(',').map((s) => s.trim()).filter(Boolean),
      avatarBase64: this.avatarPreview || null,
    };

    console.log('Payload enviado a backend:', payload);

    this.formStatus = 'success';
    this.formMessage = 'Perfil guardado correctamente ✅';
    this.showToast('Perfil guardado');
  }

  // ============================
  //         RESTABLECER
  // ============================

  resetForm() {
    if (!confirm('¿Restablecer valores del formulario?')) return;

    this.fullName = 'Anthony Sagbay';
    this.bio = '';
    this.subjects = [];
    this.availableDays = [];
    this.avatarPreview = null;
    this.formStatus = '';
    this.formMessage = '';
  }

  // ============================
  //           TOAST
  // ============================

  async showToast(msg: string) {
    const t = await this.toastCtrl.create({
      message: msg,
      duration: 1600,
      color: 'medium',
    });
    t.present();
  }
}
