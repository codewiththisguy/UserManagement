import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' }
  ];

  addUser(user: User): void {
    const newId = this.generateNewId();
    const newUser = { ...user, id: newId };
    this.users.push(newUser);
  }

  updateUser(user: User): void {
    const index = this.findIndexById(user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(userId: number): void {
    const index = this.findIndexById(userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  private generateNewId(): number {
    const maxId = Math.max(...this.users.map(user => user.id), 0);
    return maxId + 1;
  }

  private findIndexById(userId: number): number {
    return this.users.findIndex(user => user.id === userId);
  }
}
