import { Component, OnInit } from '@angular/core';
import { SongservicesService } from '../Services/songservices.service';
import { Router } from '@angular/router';
import { Song } from '../models/song.model';
import { SongManagementService } from '../song-management.service';
import { SongSelectionService } from '../song-selection.service';
import { FolderManagementService } from '../folder-management.service'; 
import {Folder} from '../models/folder.model';
@Component({
  selector: 'app-displaysounds',
  templateUrl: './displaysounds.component.html',
  styleUrls: ['./displaysounds.component.css']
})
export class DisplaysoundsComponent implements OnInit {
  selectedFolder: Folder | null |undefined;
  selectedSong: Song | null = null;

  folderName: string = '';
  folderPassword: string = '';
  notes: any;
  songs: Song[] = [
    {
      songId: 1,
      songName: 'Jai Shri Ram',
      singer: 'Ajay-Atul',
      movieName: 'Adipurush',
      cover: 'assets/covers/photo1.jpeg',
      path: 'assets/songs/song1.mp3',
      duration: 212,
    },
    {
      songId:2,
      songName: 'Undipova',
      singer: 'Spoorthi Jithender',
      movieName:'Savari',
      path: 'assets/songs/song2.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 232,
    },
    {
      songId:3,
      songName: 'Na Roja Nuvve',
      singer: 'Hesham Abdul Wahab',
      movieName:"Kushi",
      path: 'assets/songs/song3.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 238,
    },
    {
      songId:4,
      songName: 'Inthandham',
      singer: 'Vishal Chandrashekar',
      movieName:'Seetha Ramam',
      path: 'assets/songs/song4.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 218,
    },
    {
      songId:5,
      songName: 'Nijame Ne Chebutuuna',
      singer: 'Sid Sriram',
      movieName:'Ooru Peru Bhairavakona',
      path: 'assets/songs/song5.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 236,
    },
    {
      songId:6,
      songName: 'Ram Siya Ram',
      singer: 'Sachet-Parampara',
      movieName:'Adipurush',
      path: 'assets/songs/song6.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 230,
    },
    {
      songId:7,
      songName: 'Chiru Chiru',
      singer: 'Yuvan Shekar',
      movieName:'Aawara',
      path: 'assets/songs/song7.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 284,
    },
    {
      songId:8,
      songName: 'Nenu Nuvvantu',
      singer: 'Naresh Iyer',
      movieName:'Orange',
      path: 'assets/songs/song8.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 289,
    },
    {
      songId:9,
      songName: 'Yemi Cheyamanduve',
      singer: 'Shanker Mahadevan',
      movieName:'Priyuralu Pilichindhi',
      path: 'assets/songs/song9.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 300,
    },
    {
      songId:10,
      songName: 'Tillu Anna DJ Pedithe',
      singer: 'Ram Miriyala',
      movieName:'DJ Tillu',
      path: 'assets/songs/song10.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 232,
    },
    {
      songId:11,
      songName: 'Naaloney Pongaynu',
      singer: 'Harris Jayaraj',
      movieName:'Suriya s/o Krishnan',
      path: 'assets/songs/song11.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 374,
    },
    {
      songId:12,
      songName: 'Priyathama Priyathama',
      singer: 'Chinmayi',
      movieName:'Majili',
      path: 'assets/songs/song12.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 245,
    },
    {
      songId:13,
      songName: 'Pacadanamey',
      singer: 'Hariharan',
      movieName:'Sakhi',
      path: 'assets/songs/song13.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 558,
    },
    {
      songId:14,
      songName: 'Kaatuka Kaatuka',
      singer: 'G.V.Prakash',
      movieName:'Aakasham Ni Haddhu Ra',
      path: 'assets/songs/song14.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 246,
    },
    {
      songId:15,
      songName: 'Oh! Shanti Om',
      singer: 'Harris Jayaraj',
      movieName:'Suriya s/o Krishnan',
      path: 'assets/songs/song15.mp3',
      cover: 'assets/covers/photo1.jpeg',
      duration: 186,
    },
  ];

  constructor(
    private vehicleservice: SongservicesService,
    private route: Router,
    private songManagementService: SongManagementService,
    private songSelectionService: SongSelectionService,
    private songService: SongservicesService,
    private folderManagementService: FolderManagementService
  ) {
    this.vehicleservice.getAdminVehicles().subscribe(
      (temp) => (this.notes = temp),
      (err) => alert('Error in retrieving songs')
    );
  }

  ngOnInit(): void {
    
  }

  back() {
    this.route.navigate(['login']);
  }

  play() {
    this.route.navigate(['opensong']);
  }
  createFolder() {
    this.route.navigate(['folder']);
  }

  
  addSongToFolder(song: Song) {
    const folderName = 'your-folder-name'; // Replace with the desired folder name
    const password = 'your-folder-password'; // Replace with the folder password
    const folder = this.folderManagementService.getFolderByName(folderName);

    if (folder) {
      this.folderManagementService.addSongToFolder(folder, song);
      alert('Song added to favorites successfully!');
    } else {
      alert('Folder not found or incorrect password.');
    }
  }

  
  selectSong(song: Song) {
    this.selectedSong = song;
  }
  addToFavorites() {
    if (!this.selectedSong) {
      alert('Your Song is added to ur Favourites');
      return;
    }
  
    if (this.folderName.trim() === '' || this.folderPassword.trim() === '') {
      alert('Please enter a valid folder name and password to add to favorites.');
      return;
    }
  
    const folder = this.folderManagementService.getFolderByName(this.folderName);
  
    if (folder) {
      this.folderManagementService.addSongToFolder(folder, this.selectedSong);
      alert('Song added to favorites successfully!');
    } else {
      alert('Invalid folder name or password. Please try again.');
    }
  }
  
}

