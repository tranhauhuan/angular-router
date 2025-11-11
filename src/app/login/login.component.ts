import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authService: AuthService = inject(AuthService);
  router:Router=inject(Router)
  activeRoute: ActivatedRoute=inject(ActivatedRoute)
  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries)=>{
     const logout = Boolean(queries.get('logout'))
     if(logout) {
      this.authService.logout()
      alert('you are logged out. Is logged  = ' + this.authService.isLogged)
     }
    })
  }

  OnLoginClicked() {
    const user =  this.authService.login(this.username.nativeElement.value, this.password.nativeElement.value);
    if(user) {
      alert('welcome '+ user.name+ '. You are logged in')
      this.router.navigate(['/Courses'])
    } else {
      alert('The login credentials you have entered is not correct');
    }
  }
}
