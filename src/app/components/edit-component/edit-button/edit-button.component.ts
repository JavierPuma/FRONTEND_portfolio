import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css'],
})
export class EditButtonComponent{
  @Input() isEditing: boolean = false;
  @Output() onToggleEdition: EventEmitter<any> = new EventEmitter();
  isUserLogged: boolean = false;

  constructor(private userStatus: UserService) {}

  toggleEdition():void {
    this.isEditing = !this.isEditing;
    this.onToggleEdition.emit(this.isEditing);
  }

  ngOnInit() {
    this.userStatus.getUserStatus().subscribe(value => this.isUserLogged = value);
  }
}
