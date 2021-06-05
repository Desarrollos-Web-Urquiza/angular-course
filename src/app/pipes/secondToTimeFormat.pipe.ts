import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'secondsToTImeFormat'
})
export class SecondsToTImeFormat implements PipeTransform   {
    transform(seconds : number, showMinutes: boolean) : string {
        //3600 => 1hr
        //3660 => 1hr 1min
        
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor(seconds % 3600 / 60)

        return  `${hours}hrs ${minutes}mins`
    }
}