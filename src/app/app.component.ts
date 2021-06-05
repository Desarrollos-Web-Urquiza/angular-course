import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  public userSubcribed : boolean = false 
  subscriptionChanged(ev : any){
    console.log('El usuario se suscribió')
    this.userSubcribed = ev
  }
}