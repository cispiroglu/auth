import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
  providers: [UsersService]
})
export class UserUpdateComponent implements OnInit {
  user: User;
  isLoading = true;
  @ViewChild('userNameInput') userNameInputRef: ElementRef;
  @ViewChild('emailInput') emailInputRef: ElementRef;
  @ViewChild('phoneNumberInput') phoneNumberInputRef: ElementRef;

  constructor(private userService: UsersService, private router: ActivatedRoute) {
    const userId: number = Number(this.router.snapshot.params['id']);
    console.log(userId);
    this.userService.get(userId).subscribe(user => {
      this.user = user;
      this.emailInputRef.nativeElement.value = user.Email;
      this.phoneNumberInputRef.nativeElement.value = user.PhoneNumber;
      this.userNameInputRef.nativeElement.value = user.UserName;
      this.isLoading = false;
    });
  }

  ngOnInit() {

  }

  update() {
    this.user.Email = this.emailInputRef.nativeElement.value;
    this.user.PhoneNumber = this.phoneNumberInputRef.nativeElement.value;
    this.isLoading = true;
    this.userService.update(this.user).subscribe(result => {
      console.log(result);
      this.isLoading = false;
    });
  }
}
