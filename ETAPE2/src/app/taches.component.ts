import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
  
  
  filter:string = 'Tous';

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router){ }
  
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

  }  
  ajouterpending() {
    this.newTache.status="pending"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push({titre:this.newTache.titre,termine:false,status:"pending"});
      }
    });

  }  
  ajouterIP() {
    this.newTache.status="in progress"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });

  }  
  ajouterPC() {
    this.newTache.status="completed"
    this.tacheService.ajoutTaches(this.newTache).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });

  }  
  // this.todos.push({text:todoList.todoText, done:false});
 

  supprimer(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
      }
    });

  }

  modifier(tache:Tache){
    this.tacheService.updateTaches(tache).subscribe({
      next:(data)=>{tache.termine=!tache.termine}
    })
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
    // if(event.container.id=="listeTachesundef"){
    //   event.previousContainer.data[event.previousIndex]['status']="undefined"}
    // if(event.container.id=="listeTachespending"){ 
    //   event.previousContainer.data[event.previousIndex]['status']="pending"}
    //   if(event.container.id=="listeTachesIP"){ 
    //     event.previousContainer.data[event.previousIndex]['status']="in progress"}
    //     if(event.container.id=="listeTachesCP"){ 
    //       event.previousContainer.data[event.previousIndex]['status']="completed"}
    console.log( event.previousContainer.data[event.previousIndex])
  }

}
