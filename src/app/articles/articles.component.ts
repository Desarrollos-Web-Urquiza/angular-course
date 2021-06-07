import { ɵisObservable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.services';
import { staggeredShowUp } from '../animations/staggeredShowUp.animation'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [staggeredShowUp]
})
export class ArticlesComponent implements OnInit {

  constructor(public articlesS : ArticlesService) {   } 
 
  ngOnInit(): void {
    this.articlesS.getAll()

   /* const observable =   this.articlesS.buildObservable()
    
    observable.subscribe((data : any) => {
        console.log(data)
    })*/
  }

}
