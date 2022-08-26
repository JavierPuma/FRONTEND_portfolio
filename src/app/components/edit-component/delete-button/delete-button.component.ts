import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare let window: any;

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  @Output() deleteBtnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() modalTarget: any;
  isUserLogged: boolean = false;
  constructor(private userStatus: UserService) {}

  openModal() {
    const modal = new window.bootstrap.Modal(
      document.getElementById(this.modalTarget)
    );
    modal.show();
  }

  onDelete() {
    this.deleteBtnEvent.emit();
  }

  ngOnInit() {
    this.userStatus
      .getUserStatus()
      .subscribe((value) => (this.isUserLogged = value));
  }
}