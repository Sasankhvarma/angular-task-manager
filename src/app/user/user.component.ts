import { Component , EventEmitter, Input , input , Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true})user!:User;
  @Input({required:true})selected!:boolean;
  @Output() select = new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();
  get imagePath(){
    return 'assets/user/'+this.user.avatar;
  }
  onSelect(){
    this.select.emit(this.user.id)
  }
}

