import { Component, OnInit, Input } from '@angular/core';
import { RolesService } from '../roles.service';
import { Role } from '../role.model';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  @Input() roles: Role[];

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
  }

  deleteRole(roleId: number) {
    this.rolesService.delete(roleId);
  }
}
