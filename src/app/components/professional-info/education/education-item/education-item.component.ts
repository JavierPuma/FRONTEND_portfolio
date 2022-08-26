import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css'],
})
export class EducationItemComponent {
  @Input() educacionItem?: Educacion;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;
  baseUrl: string = environment.baseUrl;
  modalTarget: string = ''

  constructor(private portfolioData: PortfolioDataService) {}

  onDelete() {
    this.onItemDelete.emit(this.educacionItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: Educacion) {
    const url = `${this.baseUrl}/educacion/editar/${updatedItem.id}`;
    this.educacionItem = updatedItem;
    this.onItemUpdate.emit(this.updateItem);
    this.portfolioData.updateData(url, updatedItem).subscribe();
  }

  reloadItem() {
    this.portfolioData
      .getData(`${this.baseUrl}/educacion/${this.educacionItem?.id}`)
      .subscribe((data) => {
        this.educacionItem = data;
      });
  }
  ngOnInit(){
      this.modalTarget = 'modalEdu' + this.educacionItem?.id;
  }
}
