import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  @Output() onToggleButton: EventEmitter<any> = new EventEmitter();

  // Creamos una propiedad que almacene el min-width para que se considere la sidebar 'Abierta'
  minWidth = window.matchMedia('(min-width: 1200px)');
  // Booleano que nos muestra si el botón será para abrir o cerrar la barra.
  isOpen: boolean;

  constructor() {
    // Determinamos si el botón -al instanciarse- se usará para abrir o cerrar el sidebar.
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }

  // Método para cambiar el estado de 'isOpen', se bindeará a través de (click) y emitirá un evento personalizado al componente que lo contiene (navbar)
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.onToggleButton.emit();
  }

  // Método que va a checkear el tamaño de la pantalla y modificar el estado de 'isOpen' en base a esto. Será bindeado a través del evento (window: resize), para que se ejecute cada vez que cambia el tamaño de la ventana.
  loadButton(): void {
    this.minWidth.matches ? (this.isOpen = true) : (this.isOpen = false);
  }

  onResize(event: any) {
    let windowW = event.target.innerWidth;

    if (windowW > 1200) {
      this.loadButton();
    } else {
      return;
    }
  }

  ngOnInit(): void {}
}