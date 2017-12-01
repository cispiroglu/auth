import { Component, OnInit } from '@angular/core';
import { Role } from './role.model';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {
  roles: Role[];

  constructor(private rolesService: RolesService) {}

  ngOnInit() {
    this.rolesService.getAll().subscribe(roles => {
      this.roles = roles;
    });
  }
}
