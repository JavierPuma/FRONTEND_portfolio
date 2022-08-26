import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent {
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Input() proyectoEditable?: Proyecto;

  toggleEdition(): void {
    this.onToggleEdition.emit();
  }

  saveChanges(): void {
    this.onSave.emit(this.proyectoEditable);
  }

  reload(): void {
    this.onCancel.emit();
  }
}