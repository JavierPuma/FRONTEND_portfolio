import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent {
  @Input() index: number = 0;
  @Input() proyectoItem?: Proyecto;

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;
  modalTarget: string = '';

  constructor(private portfolioData: PortfolioDataService) {}

  onDelete() {
    this.onItemDelete.emit(this.proyectoItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: Proyecto) {
    const url = `${this.baseUrl}/proyectos/editar/${updatedItem.id}`;
    this.proyectoItem = updatedItem;
    this.portfolioData.updateData(url, updatedItem).subscribe();
  }

  reloadItem() {
    this.portfolioData
      .getData(`${this.baseUrl}/proyectos/${this.proyectoItem?.id}`)
      .subscribe((data) => {
        this.proyectoItem = data;
      });
  }

  ngOnInit() {
    this.modalTarget = 'modalProyecto' + this.proyectoItem?.id;
  }
}