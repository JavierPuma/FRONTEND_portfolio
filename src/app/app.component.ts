import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';
  constructor(private tokenStorage: TokenStorageService, private userStatus: UserService){}

  ngOnInit() {
    this.tokenStorage.getToken() ? this.userStatus.setUserStatus(true) : this.userStatus.setUserStatus(false);
  }
}
