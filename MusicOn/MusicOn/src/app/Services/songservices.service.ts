import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from './model/Song';

@Injectable({
  providedIn: 'root'
})
export class SongservicesService {
  private songs: Song[] = [];
  private currentMusicIndex = 0;
  constructor(private http: HttpClient,private routerService: Router) { }


//1.displayAdmin&user vehicles
  getAdminVehicles():Observable<Song[]>
  {
   return  this.http.get<Song[]>("http://localhost:8099/veh/v1/getAdminVehicles");
  }
  addVehicles(prod:any){
    let httpHeaders = new HttpHeaders({
      "Authorization" : "Bearer " + localStorage.getItem('Token')  
    });
    console.log(localStorage.getItem('Token'));
    let reqOption  = {headers : httpHeaders}
    
  
    return this.http.post("http://localhost:8099/veh/v1/addAdminVehicle",prod,reqOption);
  }

  //2.delete songs

  deleteVehicle(songId:any){
    let httpHeaders = new HttpHeaders({
      "Authorization" : "Bearer " + localStorage.getItem('Token')  
    });
    console.log(localStorage.getItem('Token'));
    let requestOpt={headers:httpHeaders}

    return this.http.delete("http://localhost:8099/veh/v1/delete/"+songId,requestOpt); 

  }
  getSongs() {
    return this.songs;
  }

  getCurrentSong() {
    return this.songs[this.currentMusicIndex];
  }

  setCurrentMusicIndex(index: number) {
    this.currentMusicIndex = index;
  }

  getCurrentMusicIndex() {
    return this.currentMusicIndex;
  }
}
