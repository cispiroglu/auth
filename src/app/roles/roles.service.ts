import { Injectable } from '@angular/core';
import { Role } from './role.model';
import { DataService } from '../_services/data.service';
import { Http } from '@angular/http';

@Injectable()
export class RolesService extends DataService {

  constructor(http: Http) {
    super('http://192.168.10.27:40200/Auth/api/Roles', http);
  }
}
