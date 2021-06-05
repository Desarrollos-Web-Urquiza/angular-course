import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesService {
    public articlesCount : number = 0

    constructor(private http : HttpClient ){

    }
    getAll() {
        return  this.http.get('https://api.github.com/users/Desarrollos-Web-Urquiza/repos').subscribe( data  => {
            console.log(data);
        })
    }
}