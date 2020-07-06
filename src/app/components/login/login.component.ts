import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/login/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUser('Pragyan','Pragyan123').subscribe((data) => {
      this.user = data;
    });
  }

}
