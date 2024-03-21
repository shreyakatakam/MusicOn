
// folder-management.service.ts
import { Injectable, OnInit } from '@angular/core';
import { Song } from './models/song.model';

interface Folder {
  name: string;
  password: string;
  songs: Song[];
}

@Injectable({
  providedIn: 'root'
})
export class FolderManagementService{
  private folders: Folder[]=[];

  constructor() { }
  createFolder(folderName: string, password: string) {
    // Check if the folder already exists
    const existingFolder = this.getFolderByName(folderName);
    if (existingFolder) {
      // Folder with the same name and password already exists, do nothing
      return;
    }
  
    const folder: Folder = {
      name: folderName,
      password: password,
      songs: []
    };
    this.folders.push(folder);
  }
  
  
  addSongToFolder(folder:Folder, song: Song) {
    folder.songs.push(song);
    alert("Song is added");
  }

  getFolderByName(folderName: string): Folder | undefined {
    return this.folders.find((folder) => folder.name === folderName );
  }

  getAllFolders(): Folder[] {
    return this.folders;
  }
}