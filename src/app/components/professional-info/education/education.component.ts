import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @Input() educacionData?: Educacion[];
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
        .getData(`${this.baseUrl}/educacion/listar`)
        .subscribe((data) => {
          this.educacionData = data.filter((el: any) => el.persona_id == this.personaID);
        });
    }, 500);
  }

  deleteItem(educacionItem: Educacion, index: number): void {
    const url = `${this.baseUrl}/educacion/eliminar/${educacionItem.id}`;
    this.portfolioData.deleteData(url, educacionItem).subscribe();
    this.educacionData?.splice(index, 1);
  }
}
