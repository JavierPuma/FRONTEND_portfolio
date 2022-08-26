import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  isEditing: boolean = false;
  isAdding: boolean = false;
  @Input() proyectosData?: Proyecto[];
  @Input() seccionData?: Seccion;
  baseUrl: string = environment.baseUrl;
  @Input() personaID: number = 1;

  constructor(private portfolioData: PortfolioDataService) {}

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  // Método que utilizamos para guardar cambios, el mismo actualiza los datos de la propiedad 'sectionData' y llama al método del servicio que se encarga de actualizar los datos en el JSON.
  updateSeccion(newData: Seccion): void {
    const url = `${this.baseUrl}/secciones/editar/${this.seccionData?.id}`;
    this.seccionData = newData;
    this.portfolioData.updateData(url, newData).subscribe();
  }

  reloadSeccion() {
    this.portfolioData
      .getData(`${this.baseUrl}/secciones/${this.seccionData?.id}`)
      .subscribe((data) => {
        this.seccionData = data;
      });
  }

  reloadData() {
    setTimeout(() => {
      this.portfolioData
        .getData(`${this.baseUrl}/proyectos/listar`)
        .subscribe((data) => {
          this.proyectosData = data.filter(
            (el: Proyecto) => el.persona_id == this.personaID
          );
        });
    }, 500);
  }

  toggleAdding(addingState: boolean): void {
    this.isAdding = addingState;
  }

  deleteItem(proyectoItem: Proyecto, index: number): void {
    const url = `${this.baseUrl}/proyectos/eliminar/${proyectoItem.id}`;
    this.proyectosData?.splice(index, 1);
    this.portfolioData.deleteData(url, proyectoItem).subscribe();
  }
}