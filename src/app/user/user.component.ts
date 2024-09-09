import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import {type User } from './user.motel';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) isSelected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>(); //custom event emit for select

  // avatar = input.required<string>();  //signals
  // name = input.required<string>();

  get imagePath() {
    return `assets/users/` + this.user.avatar;
  }

  // imagePath = computed(() =>{
  //   return `assets/users/` + this.avatar()});

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
