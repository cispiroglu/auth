import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Role } from '../role.model';
import { RolesService } from '../roles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {
  role: Role;
  isLoading = true;
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('roleNameInput') roleNameInputRef: ElementRef;

  constructor(private roleService: RolesService, private router: ActivatedRoute) {
    const roleId: number = Number(this.router.snapshot.params['id']);

    this.roleService.get(roleId).subscribe(role => {
      this.role = role;
      this.idInputRef.nativeElement.value = role.Id;
      this.roleNameInputRef.nativeElement.value = role.Name;
      this.isLoading = false;
    });
  }

  ngOnInit() {

  }

  update() {
    this.role.Name = this.roleNameInputRef.nativeElement.value;
    this.isLoading = true;
    this.roleService.update(this.role).subscribe(result => {
      console.log(result);
      this.isLoading = false;
    });
  }

}
