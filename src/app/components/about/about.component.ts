import { Component, Input } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  // Sobrescribimos la url de la Clase Section, pero mantenemos el resto de lógica
  @Input() seccionData?: Seccion;
  @Input() educacionData?: Educacion[];
  @Input() experienciaData?: Experiencia[];
  @Input() personaID: number = 1;
  baseUrl: string = environment.baseUrl;

  @Input() imgUrl: any;
  isEditing: boolean = false;

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

  //Método para modificar la imagen, implementar más adelante.
  saveImg(newUrl: any) {
    this.imgUrl = newUrl;
    const aboutItem: any = {
      imgUrl: newUrl,
    };
    // this.portfolioData.updateItem(this.imgUrl, aboutItem).subscribe();
  }

  reloadSeccion() {
    this.portfolioData
      .getData(`${this.baseUrl}/secciones/${this.seccionData?.id}`)
      .subscribe((data) => {
        this.seccionData = data;
      });
  }
}