import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = []; // Initialize with an empty array or dummy data

  addUser(newUser: User): void {
    this.users.push(newUser); // Make sure this line adds the user
  }
}
