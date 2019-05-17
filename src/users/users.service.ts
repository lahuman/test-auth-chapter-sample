// src/users/users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users;

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        pet: { name: 'alfred', picId: 1 },
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },
    ];
  }

  async findOne(username): Promise<any> {
    return this.users.filter(user => user.username === username)[0];
  }

  async findOneById(userId): Promise<any> {
    const { password, ...result } = this.users.filter(
      user => user.userId === userId,
    )[0];
    return result;
  }
}
