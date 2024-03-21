import { Injectable } from '@angular/core';
import { Song } from './models/song.model';
@Injectable({
  providedIn: 'root'
})
export class SongSelectionService {
  selectedSong: Song | null = null; 
  constructor() { }
  setSelectedSong(song: Song) {
    this.selectedSong = song;
  }

  getSelectedSong(): Song | null {
    return this.selectedSong;
  }
}
