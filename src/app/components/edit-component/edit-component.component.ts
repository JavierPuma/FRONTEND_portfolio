import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  @Input() seccionEditable: any;
  @Input() isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  toggleEdition(): void {
    this.onToggleEdition.emit(this.isEditing);
  }

  saveChanges(): void {
    this.onSave.emit(this.seccionEditable);
  }

  reload(): void {
    this.onCancel.emit();
  }

  ngOnInit(): void {}
}