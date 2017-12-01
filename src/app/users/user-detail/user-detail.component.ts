import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']

})
export class UserDetailComponent implements OnInit {
  @Input() users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  deleteUser(userId: number) {
    this.usersService.delete(userId);
  }
}
