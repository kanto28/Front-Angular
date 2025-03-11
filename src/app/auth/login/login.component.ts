import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  constructor(private router: Router){
   
  }

  navigatetoRegister(){
    this.router.navigateByUrl("/register");
  }

  navigatetoDashboard(){
    console.log('Redirection vers le tableau de bord...');
    this.router.navigateByUrl("/components/dashboard");  }
}
