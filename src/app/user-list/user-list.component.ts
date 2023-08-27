import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() editUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];

  editClicked(user: User): void {
    this.editUser.emit(user);
  }

  deleteClicked(userId: number): void {
    this.deleteUser.emit(userId);
  }
}
