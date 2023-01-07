import { Pipe, PipeTransform } from '@angular/core';
import { Tache } from '../model/tache';

@Pipe({
  name: 'filtreTache'
})
export class FiltreTachePipe implements PipeTransform {

  transform(value: Array<Tache>, filter:string): Array<Tache> {
    if (!value) {
      return value;
    }
    switch(filter) {
      case 'Actif':
        return value.filter( tache =>  !tache.termine)
        break;
      case 'Termine':
        return value.filter( tache =>  tache.termine)
      case 'Tous':
        return value;
        break;
      default:
        return value;

    }
  }

}

@Pipe({
  name: 'filtreTacheundefined'
})
export class FiltreTacheundefinedPipe implements PipeTransform {

  transform(value: Array<Tache>): Array<Tache> {
    return value.filter(tache => tache.status==="undefined" && tache.termine==false)
    }
  }

  @Pipe({
    name: 'filtreTachepending'
  })
  export class FiltreTachependingPipe implements PipeTransform {
  
    transform(value: Array<Tache>): Array<Tache> {
      return value.filter(tache => tache.status==="pending" && tache.termine==false)
      }
    }
  
    @Pipe({
      name: 'filtreTacheIP'
    })
    export class FiltreTacheIPPipe implements PipeTransform {
    
      transform(value: Array<Tache>): Array<Tache> {
        return value.filter(tache => tache.status==="in progress" && tache.termine==false)
        }
      }
    
      @Pipe({
        name: 'filtreTacheCP'
      })
      export class FiltreTacheCPPipe implements PipeTransform {
      
        transform(value: Array<Tache>): Array<Tache> {
          return value.filter(tache => tache.status==="completed" && tache.termine==true)
          }
        }
      