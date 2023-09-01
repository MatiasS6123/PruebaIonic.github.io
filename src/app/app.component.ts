import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/folder/login',icon: 'person' },
    { title: 'Agregar', url: '/folder/Agregar',icon: 'person' },
    { title: 'Modificar', url: '/folder/Modificar',icon: 'person' },
    { title: 'Eliminar', url: '/folder/Eliminar', icon: 'person' },
    { title: 'Listar', url: '/folder/listar', icon: 'person' },
  ];
  public labels = [];
  constructor() {}
}
