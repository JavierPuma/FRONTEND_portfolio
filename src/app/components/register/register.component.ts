import { Component, OnInit } from '@angular/core';
import { RegistroForm } from 'src/app/model/RegistroForm';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegistroForm = new RegistroForm('', '', '');

  isSuccessful: boolean = false;
  registerFailed: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  registerUser(): void {
    const { username, email, password } = this.form;

    const observer = {
      next: (data: any) => {
        this.isSuccessful = true;
        this.registerFailed = false;
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
        this.registerFailed = true;
      },
    };

    this.authService.register(username, email, password).subscribe(observer);
  }

  ngOnInit(): void {}
}