import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongservicesService } from '../Services/songservices.service';
import { Song } from '../Services/model/Song';

@Component({
  selector: 'app-adminsongs',
  templateUrl: './adminsongs.component.html',
  styleUrls: ['./adminsongs.component.css']
})
export class AdminsongsComponent {

  @Input() 
  n?: Song;
  notes:any;

  constructor(private vehicleservice:SongservicesService ,private route:Router){}

  ngOnInit()
  {
   this.vehicleservice.getAdminVehicles().subscribe(temp=>this.notes=temp,
    err=>alert("error in retreiving"));
  }
  back(){
    this.route.navigate(["login"]);
   }

   play()
   {
    this.route.navigate(["opensong"]);
    // alert("playing song..")
   }





data:any;

  delete(songId:any){  
    console.log(songId);
    
    this.vehicleservice.deleteVehicle(songId).subscribe(
      (res)=>
      
      {
         this.data=res;
         alert("deleted");
         this.route.navigate(['adminsongs'])
      },
      (err)=>{
        alert(" deleted")
        this.route.navigate(['adminsongs'])
      }
     
    )};
}
