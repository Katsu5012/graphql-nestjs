import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

let users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
];

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    users.push({ id: users.length + 1, name: createUserInput.name });

    return users.find((user) => user.name === createUserInput.name);
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user = users.find((user) => user.id === id);

    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const user = users.find((user) => user.id === id);
    user.name = updateUserInput.name;

    return this.findOne(id);
  }

  remove(id: number) {
    const notDeletedUsers = users.filter((user) => user.id !== id);

    users = notDeletedUsers;

    return users;
  }
}
