import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() personaData?: Persona;

  // Método que nos mostrará los elementos cuando la ventana carga a través del (window:load).
  showTitle() {
    const el = document.querySelector('#heroText');
    el?.classList.remove('hideText', 'opacity-0');
  }

  ngOnInit() {
    setTimeout(this.showTitle, 200);
  }
}
