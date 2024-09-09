import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {type User } from './user.model';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) isSelected!: boolean;

  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return `assets/users/` + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
