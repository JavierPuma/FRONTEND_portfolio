import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent{
  @Input() isAdding: boolean = false;
  @Input() itemsList: any[] = [];
  @Output() onToggleAdding: EventEmitter<any> = new EventEmitter();
  isUserLogged: boolean = false;
  constructor(private userStatus: UserService) {}

  toggleAdding(): void {
    this.isAdding = !this.isAdding
    this.onToggleAdding.emit(this.isAdding);
  }
  
  reload(): void {
    if (!this.isAdding) {
      window.location.reload();
    }
  }

  ngOnInit() {
    this.userStatus.getUserStatus().subscribe(value => this.isUserLogged = value);
  }
}