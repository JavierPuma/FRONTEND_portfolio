import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habilidad } from 'src/app/model/Habilidad';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent {
  isEditing: boolean = false;
  @Input() habilidadesList: Habilidad[] = [];
  @Input() skillsTitle: string = 'Example';
  @Input() barColor: string = 'bg-primary';
  @Input() habilidadItem?: Habilidad;
  baseUrl: string = environment.baseUrl;
  modalTarget?: string;

  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();

  constructor(private portfolioData: PortfolioDataService) {}

  onDelete() {
    this.onItemDelete.emit(this.habilidadItem);
  }

  // Método que cambia el estado del booleano, esto nos servirá para pasar del "modo edicion" al "modo visualizar".
  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  updateItem(updatedItem: Habilidad) {
    const url = `${this.baseUrl}/habilidades/editar/${updatedItem.id}`;
    this.habilidadItem = updatedItem;
    this.portfolioData.updateData(url, updatedItem).subscribe();
  }

  reloadItem() {
    this.portfolioData
      .getData(`${this.baseUrl}/habilidades/${this.habilidadItem?.id}`)
      .subscribe((data) => {
        this.habilidadItem = data;
      });
  }

  ngOnInit() {
    this.modalTarget = 'ModalSkill' + this.habilidadItem?.id;
  }
}