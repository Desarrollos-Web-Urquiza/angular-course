import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { ChildActivationStart } from '@angular/router';


class Repo {
    constructor(public id : string, public name : string ){

    }
}

@Injectable()
export class ArticlesService {
    public reposCount : number = 0

    public reposObserver : any = [   ]
    constructor(private http : HttpClient ){
        this.countRepos()

    }
    getAll() {
        this.reposObserver =  this.http.get('https://api.github.com/users/Desarrollos-Web-Urquiza/repos')
        .pipe(map((data : any) =>{
            return data.map((r: any ) => new Repo(r.id, r.name))
        }))
    }
    countRepos(){
        fetch('https://api.github.com/users/Desarrollos-Web-Urquiza/repos')
        .then(response => response.json())
        .then(repos => this.reposCount = repos.length )
    }

    /*buildObservable()  : Observable<any> { 
        let number = 0
        return Observable.create( function(observer : any){
            setInterval(() => observer.next(number++), 1000)
            
        })
    }*/
}