import { Injectable } from '@angular/core';
import { User } from './user.model';
import { DataService } from '../_services/data.service';
import { Http } from '@angular/http';

@Injectable()
export class UsersService extends DataService {

  constructor(http: Http) {
    super('http://192.168.10.27:40200/Auth/api/Users', http);
  }
}
