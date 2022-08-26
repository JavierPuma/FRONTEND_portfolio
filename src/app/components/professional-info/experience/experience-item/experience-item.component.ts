import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  @Input() url: any;
  @Input() experienciaItem?: Experiencia;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;
  modalTarget: string = '';

  constructor(private portfolioData: PortfolioDataService) {}
  onDelete() {
    this.onItemDelete.emit(this.experienciaItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: Experiencia) {
    const url = `${this.baseUrl}/experiencia/editar/${updatedItem.id}`;
    this.experienciaItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateData(url, updatedItem).subscribe();
  }

  reloadItem() {
    this.portfolioData
      .getData(`${this.baseUrl}/experiencia/${this.experienciaItem?.id}`)
      .subscribe((data) => {
        this.experienciaItem = data;
      });
  }

  ngOnInit() {
    this.modalTarget = 'modalExp' + this.experienciaItem?.id;
  }
}