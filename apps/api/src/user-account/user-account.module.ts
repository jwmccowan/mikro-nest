import { Module } from '@nestjs/common';
import UserModule from '../user/user.module';
import UserAccountResolver from './resolvers/user-account.resolver';
import UserResolver from './resolvers/user.resolver';
import CreateAccountMutation from './use-cases/create-account/create-account.mutation';

@Module({
  imports: [UserModule],
  providers: [UserAccountResolver, UserResolver, CreateAccountMutation],
})
export default class UserAccountModule {}
