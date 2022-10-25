import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  userList: User[] = [];
  displayedColumns: string[] = [
    'firstName',
    'location',
    'following',
    'followers',
    'noOfRepositories',
    'htmlUrl',
    'actions',
  ];
  @ViewChild(MatTable) table: MatTable<any>;
  selectedRowIndex: any;
  userProfile: any;
  constructor(private dataService: DataService, public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.userList = this.dataService.getUserList();
  }

  deleteItem(userIndex): void {
    this.userList = this.userList.filter((item, index) => index !== userIndex);
    this.dataService.updateUserList(this.userList);
    this.userProfile = null;
  }

  showProfile(index): void {
    this.userProfile = this.userList[index];
  }

  openSnackBar(): void {
    this.snackBar.open('User deleted successfully', 'Done', {
      duration: 2000,
    });
  }
}
