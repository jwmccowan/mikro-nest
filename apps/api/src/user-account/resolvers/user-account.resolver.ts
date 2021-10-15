import { EntityManager } from '@mikro-orm/core';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import UserAccountEntity from '../user-account.entity';
import UserNode from '../../user/nodes/user.node';
import UserAccountNode from '../nodes/user-account.node';

@Resolver(() => UserAccountNode)
export default class UserAccountResolver {
  public constructor(private readonly em: EntityManager) {}

  @ResolveField(() => String, { nullable: true })
  public async givenName(@Parent() { id }: UserAccountNode): Promise<string | undefined> {
    const userAccount = await this.em.findOneOrFail(UserAccountEntity, id);
    return userAccount.givenName;
  }

  @ResolveField(() => String, { nullable: true })
  public async familyName(@Parent() { id }: UserAccountNode): Promise<string | undefined> {
    const userAccount = await this.em.findOneOrFail(UserAccountEntity, id);
    return userAccount.familyName;
  }

  @ResolveField(() => String, { nullable: true })
  public async handle(@Parent() { id }: UserAccountNode): Promise<string | undefined> {
    const userAccount = await this.em.findOneOrFail(UserAccountEntity, id);
    return userAccount.handle;
  }

  @ResolveField(() => UserNode)
  public async user(@Parent() { id }: UserAccountNode): Promise<UserNode> {
    const userAccount = await this.em.findOneOrFail(UserAccountEntity, id);
    return new UserNode(userAccount.user.id);
  }
}
