import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../users.service';
import { NewUser } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUser: NewUser;
  isLoading = false;
  @ViewChild('userNameInput') userNameInputRef: ElementRef;
  @ViewChild('passwordInput') passwordInputRef: ElementRef;
  @ViewChild('confirmPasswordInput') confirmPasswordInputRef: ElementRef;

  constructor(private usersService: UsersService) {
    this.newUser = new NewUser();
  }

  ngOnInit() {

  }

  create() {
    this.newUser.userName = this.userNameInputRef.nativeElement.value;
    this.newUser.password = this.passwordInputRef.nativeElement.value;
    this.newUser.confirmPassword = this.confirmPasswordInputRef.nativeElement.value;
    this.isLoading = true;
    console.log(this.newUser);
    this.usersService.create(this.newUser).subscribe(result => {
      console.log(result);
      this.isLoading = false;
    });
  }
}
