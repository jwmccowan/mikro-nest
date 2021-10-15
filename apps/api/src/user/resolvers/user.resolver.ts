import { EntityManager } from '@mikro-orm/core';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import UserEntity from '../user.entity';
import UserNode from '../nodes/user.node';

@Resolver(() => UserNode)
export default class UserResolver {
  public constructor(private readonly em: EntityManager) {}

  @ResolveField(() => String, { name: 'email', nullable: false })
  public async getEmail(@Parent() { id }: UserNode): Promise<string> {
    const user = await this.em.findOneOrFail(UserEntity, id);
    return user.email;
  }
}
