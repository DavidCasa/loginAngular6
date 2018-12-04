import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin : boolean;
  public nombreUser: string;
  public email: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;
        console.log(this.isLogin);
        this.nombreUser= auth.displayName;
        this.email = auth.email;
      } else {
        this.isLogin=false;
        console.log(this.isLogin);
      }
    })
  }
  onClickLogout(){
    this.authService.logout();
  }


}
