import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Experiencia } from 'src/app/model/Experiencia';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experienciaData?: Experiencia[];
  @Input() personaID: number = 1;
  isEditing: boolean = false;
  isAdding: boolean = false;
  baseUrl: string = environment.baseUrl;

  // Inyectamos el servicio utilizando el modificador 'Protected', de manera que las instancias de esta clase puedan acceder al servicio.
  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  reloadData() {
    setTimeout(() => {
      this.portfolioData
        .getData(`${this.baseUrl}/experiencia/listar`)
        .subscribe((data) => {
          this.experienciaData = data.filter((el: any) => el.persona_id == this.personaID);
        });
    }, 500);
  }

  deleteItem(experienciaItem: Experiencia, index: number): void {
    const url = `${this.baseUrl}/experiencia/eliminar/${experienciaItem.id}`;
    this.experienciaData?.splice(index, 1);
    this.portfolioData.deleteData(url, experienciaItem).subscribe();
  }
}