import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  private passwd: ElementRef;

  constructor(private servAuth: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(ev: any, inpMail: any): void {
    console.log(this.passwd.nativeElement.value);
    this.servAuth.login(inpMail, this.passwd.nativeElement.value);

  }

}
