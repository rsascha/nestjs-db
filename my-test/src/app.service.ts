import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from './entity/user';

@Injectable()
export class AppService {
  async getHello(): Promise<User[]> {

    const connection = getConnection();
    return connection.manager.find(User).then(users => {
        console.log("Loaded users: ", users);
        return users;
    });
  }
}
