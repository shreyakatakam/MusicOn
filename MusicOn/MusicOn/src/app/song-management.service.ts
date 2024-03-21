import { Injectable } from '@angular/core';
import { Song } from './models/song.model';
@Injectable({
  providedIn: 'root'
})
export class SongManagementService {
  private songs: Song[] = []; // Store songs added to the folder

  addSongToFolder(song: Song) {
    this.songs.push(song);
  }

  getSongsInFolder(): Song[] {
    return this.songs;
  }

  clearSongsInFolder() {
    this.songs = [];
  }

  constructor() { }
}
