import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../models/song.model';
import { SongManagementService } from '../song-management.service';
import { Folder } from '../models/folder.model';
import { FolderManagementService } from '../folder-management.service';

@Component({
  selector: 'app-folder-component',
  templateUrl: './folder-component.component.html',
  styleUrls: ['./folder-component.component.css']
})
export class FolderComponentComponent implements OnInit {
  selectedFolder: Folder | null |undefined;
  selectedSong: Song | null = null;

  folderName: string = '';
  folderPassword: string = '';
  folders: Folder[] = [];
  newFolderName: string = '';
  newFolderPassword: string = '';

  constructor(private folderManagementService: FolderManagementService,
    private route :Router) {}

  ngOnInit(): void {
    this.folders = this.folderManagementService.getAllFolders();
  }

  createFolder() {
    this.folderManagementService.createFolder(this.newFolderName, this.newFolderPassword);
    this.newFolderName = '';
    this.newFolderPassword = '';
    alert('Folder created successfully!');
  }

  openFolder(){
    this.route.navigate(['opensong']);
  }
  verifyPassword() {
    if (!this.folderName || !this.folderPassword) {
      alert('Please enter folder name and password to verify.');
      return;
    }

    this.selectedFolder = this.folderManagementService.getFolderByName(this.folderName);
    if (this.selectedFolder) {
      alert('Folder verified successfully!');
    } else {
      alert('Incorrect folder name or password.');
    }
  }
  
}
