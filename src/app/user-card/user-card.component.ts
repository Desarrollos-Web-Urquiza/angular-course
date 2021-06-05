import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name : string= "" ;
  public username : string = "";
  public avatar : string = "";

  @Output() suscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.name = 'Uriel';
    this.username = 'Uriel_hedz';
    this.avatar = 'https://media-exp3.licdn.com/dms/image/C5603AQHka1D56sLnxw/profile-displayphoto-shrink_100_100/0/1600453040985?e=1628121600&v=beta&t=mT9x_BxWNQ560GFEAFvy0VtgJYha-_v7JbgX5bbOUDQ';

    setTimeout(()=> this.suscribed.emit(true),3000)
    setTimeout(()=> this.name = 'Cody',3000)
  }

  changingUsername(event : any){
    this.username = event.target.value
  }
  changingName(event : any){
    this.username = event.target.value
  }

}
