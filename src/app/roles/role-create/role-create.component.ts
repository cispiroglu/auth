import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Role } from '../role.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  newRole: Role;
  isLoading = false;
  @ViewChild('roleNameInput') roleNameInputRef: ElementRef;

  constructor(private rolesService: RolesService) {
    this.newRole = new Role();
  }

  ngOnInit() {

  }

  create() {
    this.newRole.Name = this.roleNameInputRef.nativeElement.value;
    this.isLoading = true;

    this.rolesService.create(this.newRole).subscribe(result => {
      console.log(result);
      this.isLoading = false;
    });
  }

}
