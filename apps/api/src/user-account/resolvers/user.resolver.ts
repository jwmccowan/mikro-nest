import { EntityManager } from '@mikro-orm/core';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import UserAccountNode from '../nodes/user-account.node';
import UserNode from '../../user/nodes/user.node';
import UserAccountEntity from '../user-account.entity';

@Resolver(() => UserNode)
export default class UserResolver {
  public constructor(private readonly em: EntityManager) {}

  @ResolveField(() => UserAccountNode, { name: 'account', nullable: true })
  public async getUserAccountNode(@Parent() { id }: UserNode): Promise<UserAccountNode | null> {
    const accounts = await this.em.find(UserAccountEntity, { user: { id } });
    if (accounts.length === 0) {
      return null;
    }
    return new UserAccountNode(accounts[0].id);
  }
}
