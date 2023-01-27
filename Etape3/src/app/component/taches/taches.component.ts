import { Component,Renderer2,ViewChild,ElementRef ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})

export class TachesComponent implements OnInit {
  taches: Array<Tache> = [];
  newTache: Tache = { 
    titre : '',
    termine : false,
    status :''
  };

  
  @ViewChild('container')
  container!: ElementRef;
  
  filter:string = 'Tous';

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router,
    private renderer:Renderer2){ }
  


  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });

  }  

  ajouterundef() {
    this.newTache.status="undefined"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });
    window.setTimeout( function() {
      window.location.reload();
    },0);
  }  
  ajouterpending() {
    this.newTache.status="pending"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push({titre:this.newTache.titre,termine:false,status:"pending"});
      }
    });
    window.setTimeout( function() {
      window.location.reload();
    },0);
  }  
  ajouterIP() {
    this.newTache.status="in progress"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });
    window.setTimeout( function() {
      window.location.reload();
    },0);
  }  
  ajouterPC() {
    this.newTache.status="completed"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });
    window.setTimeout( function() {
      window.location.reload();
    },0);
  }  
  
  supprimer(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
      }
    });
  }
  
  supprimerListe(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
      }
    });
  }

  modifier(tache: Tache) {
    tache.termine = !tache.termine;
    this.tacheService.updateTaches(tache).subscribe({
      next: (data) => {
      }
    });
  }

  loggout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  change(filter:string) {
    this.filter = filter;
  }

  drop(event: CdkDragDrop<Tache[]>) {
    window.setTimeout( function() {
      window.location.reload();
    },0);
    const tache = event.item.data;    
    console.log(tache)    
    tache.status = event.container.id;    
    console.log(tache)
    this.tacheService.updateTaches(tache).subscribe((response) => {});
}


addListe(){
  const div1: HTMLElement = this.renderer.createElement('div1')
  const div2: HTMLElement = this.renderer.createElement('div2');
  const h1: HTMLElement = this.renderer.createElement('h1')
  const button: HTMLElement = this.renderer.createElement('button')
  const div3: HTMLElement = this.renderer.createElement('div3')
  const input: HTMLElement = this.renderer.createElement('input')
  const button1: HTMLElement = this.renderer.createElement('button1')
  const div4: HTMLElement = this.renderer.createElement('div4')
  const divdroplist: HTMLElement = this.renderer.createElement('divdroplist')
  const divbox: HTMLElement = this.renderer.createElement('divbox')
  const input2: HTMLElement = this.renderer.createElement('input2')
  const div5: HTMLElement = this.renderer.createElement('div5')
  const button2: HTMLElement = this.renderer.createElement('button2')
  h1.innerHTML=this.newTache.status
  button.innerHTML="Supprimer"
  button1.innerHTML="Ajouter"
  this.renderer.setAttribute(div1, 'class', 'd-flex flex-column')
  this.renderer.appendChild(this.container.nativeElement,div1)
  this.renderer.setAttribute(div2, 'class', 'd-flex flex-row justify-content-center gap-2 m-2')
  this.renderer.appendChild(div1,div2)
  this.renderer.setAttribute(h1, 'class', 'd-flex flex-row justify-content-center')
  this.renderer.appendChild(div2,h1)
  this.renderer.setAttribute(button, 'class', 'btn btn-outline-danger gap-3 m-1')
  this.renderer.appendChild(div2,button)
  this.renderer.setAttribute(div3, 'class', 'd-flex flex-row justify-content-center gap-2')
  this.renderer.appendChild(div1,div3)
  this.renderer.setAttribute(input, 'class', 'saisieInput')
  this.renderer.setAttribute(input, 'type', 'text')
  this.renderer.setAttribute(input, 'name', 'tache'+" "+this.newTache.status)
  this.renderer.setAttribute(input, 'placeholder', 'tache'+" "+this.newTache.status)
  this.renderer.appendChild(div3,input)
  this.renderer.setAttribute(button1, 'class', 'btn btn-primary')
  this.renderer.appendChild(div3,button1)
  this.renderer.setAttribute(div4, 'class', 'd-flex  justify-content-center')
  this.renderer.appendChild(div1,div4)
  this.renderer.setAttribute(divdroplist,'cdkDropList', '')
  this.renderer.setAttribute(divdroplist,'class','m-2 list d-flex  flex-column')
  //this.renderer.setAttribute(divdroplist,'[cdkDropListData]','taches') // [] refusé par setAttribute
  //this.renderer.setAttribute(divdroplist,'(cdkDropListDropped)','drop($event)') () réfusé par setAttribute
  //this.renderer.setAttribute(divdroplist,'#pendingList',"cdkDropList") # refusé par setAttribute
  this.renderer.appendChild(div4,divdroplist)
  this.renderer.setAttribute(divbox,'cdkDrag', '')
  this.renderer.setAttribute(divbox,'class','box d-flex justify-content-between gap-3 m-1')
    //this.renderer.setAttribute(divbox,'*ngfor','let tache of taches') * est refusé par setAttribute 
    //this.renderer.setAttribute(divbox,'[cdkDragData]',"tache") 
  this.renderer.appendChild(divdroplist,divbox)
  //this.renderer.setAttribute(input2, '(click)','modifier(tache)')
  this.renderer.setAttribute(input2, 'type', 'checkbox')
  //this.renderer.setAttribute(input2, '[(ngModel)]',"tache.termine")
  this.renderer.appendChild(divbox,input2)
  this.renderer.setAttribute(div5,'class','align-self-center')
  this.renderer.setAttribute(div5,'class','align-self-center')
  this.renderer.appendChild(divbox,div5)
  this.renderer.setAttribute(button2,'class','btn btn-outline-danger gap-3 m-1')
  button2.innerHTML='Supprimer'
}
}
//class="box d-flex justify-content-between gap-3 m-1" *ngFor="let tache of (taches | filtreTachepending)" [cdkDragData]="tache" cdkDrag
// <div class="d-flex flex-column">
// <div class="d-flex flex-row justify-content-center gap-2 m-2">
//     <h1  class="d-flex flex-row justify-content-center">En Attente</h1>
//     <button class="btn btn-outline-danger gap-3 m-1">Supprimer</button>
// </div>
// <div class="d-flex flex-row justify-content-center gap-2">
//     <input id="inputAjoutTachepending" class="saisieInput" type="text" name="tachepending" placeholder="tache en attente" [(ngModel)]="newTache.titre">

//     <button id="buttonAjoutTachepending" class="btn btn-primary" value="Ajouter" (click)='ajouterpending()'>Ajouter</button>
// </div>
// <div class="d-flex  justify-content-center">
//     <div cdkDropList #pendingList="cdkDropList" [cdkDropListData]="taches" id="pending" class="m-2 list d-flex  flex-column"  (cdkDropListDropped)=drop($event)>
//         <div class="box d-flex justify-content-between gap-3 m-1" *ngFor="let tache of (taches | filtreTachepending)" [cdkDragData]="tache" cdkDrag>
//             <input (click)="modifier(tache)" type="checkbox" [(ngModel)]="tache.termine">
//             <div class="align-self-center" [ngClass]="tache.termine? 'text-decoration-line-through' : '' ">{{tache.titre}}</div>
//             <button class="btn btn-outline-danger gap-3 m-1" (click)='supprimer(tache)'>Supprimer</button>
//         </div>
//     </div>
// </div>
// </div>