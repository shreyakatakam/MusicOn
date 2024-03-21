import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from '../models/folder.model';
import { FolderManagementService } from '../folder-management.service';

@Component({
  selector: 'app-password-protection',
  templateUrl: './password-protection.component.html',
  styleUrls: ['./password-protection.component.css']
})
export class PasswordProtectionComponent implements OnInit {
  folderName: string = '';
  folderPassword: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private folderManagementService: FolderManagementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.folderName = params['folderName'];
    });
  }

  verifyPassword() {
    const folder = this.folderManagementService.getFolderByName(this.folderName);
    if (folder) {
      this.router.navigate(['/add-to-favorites', this.folderName]);
    } else {
      alert('Incorrect folder name or password.');
    }
  }
}
