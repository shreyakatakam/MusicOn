import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../models/song.model';
import { Folder } from '../models/folder.model';
import { FolderManagementService } from '../folder-management.service';
import { SongSelectionService } from '../song-selection.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.css']
})
export class AddToFavoritesComponent implements OnInit {
  @Input() songs?: Song[]; 
  folderName: string = '';
  selectedFolder: Folder | null |undefined;
  

  constructor(
    private route: ActivatedRoute,
    private folderManagementService: FolderManagementService,
    private songSelectionService: SongSelectionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.folderName = params['folderName'];
      this.selectedFolder = this.folderManagementService.getFolderByName(this.folderName);
    });
  }

  addSongToFolder(song: Song) {
    if (this.selectedFolder) {
      this.folderManagementService.addSongToFolder(this.selectedFolder, song);
      alert('Song added to favorites successfully!');
    } else {
      alert('Please select a folder to add the song to favorites.');
    }
  }
}
