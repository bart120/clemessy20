import { Component } from '@angular/core';
import { UserModel } from './models/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EIFFAGE ENERGIE SYSTEMES';
  user: UserModel;

  constructor(private servAuth: AuthService) { }

  ngOnInit(): void {

    console.log('subscribe');
    this.servAuth.user$.subscribe(user => {
      console.log('next app', user);
      this.user = user;
    });


  }

  onLogout(): void {
    this.servAuth.logout();
  }
}
