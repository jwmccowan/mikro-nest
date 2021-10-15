import { Args, Mutation, Resolver } from '@nestjs/graphql';
import UserAccountEntity from '../../user-account.entity';
import UserAccountNode from '../../nodes/user-account.node';
import CreateAccountInput from './create-account.input';
import { EntityManager } from '@mikro-orm/core';
import UserEntity from '../../../user/user.entity';

@Resolver()
export default class CreateAccountMutation {
  public constructor(private readonly em: EntityManager) {}

  @Mutation(() => UserAccountNode, { nullable: true })
  async createAccount(
    @Args('input') { familyName, givenName, handle, userId }: CreateAccountInput,
  ): Promise<UserAccountNode | null> {
    const existingAccount = await this.em.find(UserAccountEntity, { user: { id: userId } });
    if (existingAccount.length !== 0) {
      return null;
    }
    const user = await this.em.findOne(UserEntity, userId);
    if (!user) {
      return null;
    }
    const account = UserAccountEntity.create(user, { familyName, givenName, handle });
    await this.em.persistAndFlush(account);
    return account;
  }
}
