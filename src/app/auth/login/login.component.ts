import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }
  email: string = "bruno@email.com";
  password: string = "bruno";
  ngOnInit(): void {
  }

  login(){
      this.authService.login(this.email,this.password)
      .subscribe({
        next: (res) => {localStorage.setItem('jwt',JSON.stringify(res));
        this.router.navigateByUrl('protected');},
        error: (e) => {swal({
          title: 'Error',
          text: 'Email o contraseña incorrecta',
          icon: 'error'
        })}
      })
    } 
  }

