import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SongservicesService } from '../Services/songservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.css']
})
export class AddsongsComponent {
  constructor(private fb:FormBuilder, private vehiclesservice:SongservicesService, private route:Router) {}
 
  addvehicle=this.fb.group({
    songId:['', [Validators.required]],
    songName:['', [Validators.required]],
    singer:['', [Validators.required]],
    moviename:['', [Validators.required]]
  });

    
    get songId(){
      return this.addvehicle.get('songId')
    }
    get songName(){
      return this.addvehicle.get('songName')
    }
    get singer(){
      return this.addvehicle.get('singer')
    }
    get moviename(){
      return this.addvehicle.get('moviename')
    }
    



  AddVehicleData():void{
    console.log(this.addvehicle.value);
    this.vehiclesservice.addVehicles(this.addvehicle.value).subscribe(
      {
        next:
        (response) => {
          console.log("add");
        console.log(response);
        alert("vehicle added")
        this.route.navigate(['adminsongs']);
      },
     error:(err) => {
        console.log(err);
        alert("no song added");
      }});

     }


     back(){
      this.route.navigate(["adminsongs"]);
     }
  
    ngOnInit(): void {
    }
}
