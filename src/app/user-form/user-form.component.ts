import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User = { id: 0, firstName: '', lastName: '', email: '' };
  @Input() formTitle: string = 'Add New User';
  @Input() actionText: string = 'Submit';

  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Output() formCancel: EventEmitter<void> = new EventEmitter<void>();

  submitForm(): void {
    console.log('Submit button clicked');
    this.formSubmit.emit(this.user);
  }
  

  cancelForm(): void {
    this.formCancel.emit();
  }
}
