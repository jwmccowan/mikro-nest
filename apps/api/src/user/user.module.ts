import { Module } from '@nestjs/common';
import UserQuery from './query/user.query';
import UsersQuery from './query/users.query';
import CreateUserMutation from './use-cases/create-user/create-user.mutation';
import UserResolver from './resolvers/user.resolver';

@Module({
  providers: [UserQuery, UserResolver, UsersQuery, CreateUserMutation],
})
export default class UserModule {}
