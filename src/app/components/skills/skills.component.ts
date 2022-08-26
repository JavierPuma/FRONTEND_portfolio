import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/Habilidad';
import { Seccion } from 'src/app/model/Seccion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  // Informacion de la descripcion
  @Input() seccionData?: Seccion;
  @Input() habilidadesData?: Habilidad[];
  @Input() personaID: number = 1;

  habilidadesFront?: Habilidad[];
  habilidadesBack?: Habilidad[];
  habilidadesSoft?: Habilidad[];
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;

  constructor(private portfolioData: PortfolioDataService) {}

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
        .getData(`${this.baseUrl}/habilidades/listar`)
        .subscribe((data) => {
          this.habilidadesData = data.filter((el: any) => el.persona_id == this.personaID);
          this.habilidadesFront = this.habilidadesData?.filter(
            (el) => el.tipo == 'Frontend'
          );
          this.habilidadesBack = this.habilidadesData?.filter(
            (el) => el.tipo == 'Backend'
          );
          this.habilidadesSoft = this.habilidadesData?.filter(
            (el) => el.tipo == 'Soft'
          );
        });
    }, 500);
  }


  ngOnInit(): void {
    this.habilidadesFront = this.habilidadesData?.filter(
      (el) => el.tipo == 'Frontend'
    );
    this.habilidadesBack = this.habilidadesData?.filter(
      (el) => el.tipo == 'Backend'
    );
    this.habilidadesSoft = this.habilidadesData?.filter(
      (el) => el.tipo == 'Soft'
    );
  }
}