import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../app/interface/user';

@Component({
  selector: 'app-usercomp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usercomp.html',
  styleUrls: ['./usercomp.css'],
})

export class Usercomp {
  users: User[] = [];
  user: User = { id: 0, name: '', email: '' };
  isEditMode = false;

  saveUser() {
    if (this.isEditMode) {
      const index = this.users.findIndex((u) => u.id === this.user.id);
      if (index !== -1) this.users[index] = { ...this.user };
      this.isEditMode = false;
    } else {
      const newUser: User = { ...this.user, id: Date.now() };
      this.users.push(newUser);
    }

    this.resetForm();
  }

  editUser(selectedUser: User) {
    this.user = { ...selectedUser };
    this.isEditMode = true;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((u) => u.id !== id);
    if (this.isEditMode && this.user.id === id) this.resetForm();
  }

  resetForm() {
    this.user = { id: 0, name: '', email: '' };
    this.isEditMode = false;
  }
}
