import { Component, OnInit } from '@angular/core';
import { Music } from '../music.model';
import { Router } from '@angular/router';
import { SongservicesService } from '../Services/songservices.service';
import { Song } from '../models/song.model';
import { SongSelectionService } from '../song-selection.service';

@Component({
  selector: 'app-opensong',
  templateUrl: './opensong.component.html',
  styleUrls: ['./opensong.component.css']
})
export class OpensongComponent implements OnInit{
  selectedSong: Song | null = null;
  currentMusicIndex: number = 0;
  isPlaying = false;
  audio = new Audio();
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
  constructor(public musicService: SongservicesService,
    private songSelectionService: SongSelectionService,private router: Router) {
    this.setMusic(this.currentMusicIndex);
    this.audio.onended = () => this.forward();
    
    this.selectedSong = this.songSelectionService.getSelectedSong();
  }
  ngOnInit(): void {

    if (this.selectedSong) {
      this.currentMusicIndex = this.songs.findIndex((song) => song === this.selectedSong);

        this.audio.src = this.selectedSong.path;
        this.audio.load();
        this.audio.play();
        this.isPlaying = true;
      
    }
    throw new Error('Method not implemented.');
  }

  setMusic(index: number): void {
    const song = this.songs[index];
    this.audio.src = song.path;
    this.audio.load();
  }
  playPause(): void {
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  forward(): void {
    const totalSongs = this.musicService.getSongs().length;
    this.currentMusicIndex = (this.currentMusicIndex + 1) % this.songs.length;
    this.setMusic(this.currentMusicIndex);
    this.playPause();
  }

  backward(): void {
    const totalSongs = this.musicService.getSongs().length;
    this.currentMusicIndex = (this.currentMusicIndex - 1 + this.songs.length) % this.songs.length;
    this.setMusic(this.currentMusicIndex);
    this.playPause();
  }
  formatTime(time: number): string {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  addToFavorites() {
    if (this.selectedSong) {
      this.songSelectionService.setSelectedSong(this.selectedSong);
      this.router.navigate(['/folder']);
    }
  }
}

