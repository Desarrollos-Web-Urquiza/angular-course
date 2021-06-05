import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css'] 
})
export class TitleComponent implements OnInit {
    public name : string = 'Hernandez' ;
    // public edad : number = 27 ;
    // public edades : number[] = [1,2,3] ;

    public moreInformation : boolean= false ;

    public isAvaileble : boolean= false ;

    public category : string = "web";
    public topics : string[] = ['Fundamentos del framework',  'ngFor', 'ngIf'] ;
    public launchDate : Date = new Date(2018,11,25)
    public price : number = 25

    @Input() subscribed : boolean = false;

    constructor(){}

    ngOnInit(){
        this.name = 'Uriel'
        // this.edad = 28

        // setTimeout(()=> this.name = "Marcos Uriel", 3000)
        // setTimeout(()=> this.isAvaileble = false, 3000)
        // setTimeout(()=> this.css_classes  =  ['shadow'], 3000)
        // setTimeout(()=> this.moreInformation  =  true, 3000)
    }

    toggleMoreInformation(){
        this.moreInformation  = !this.moreInformation  ;
    }
    // getEdadNombre() : string {
    //     return `${this.name} : ${this.edad}`  ;
    // }
   
}