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
}
