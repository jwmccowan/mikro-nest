import { EntityManager } from '@mikro-orm/core';
import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import UserEntity from '../user.entity';
import UserNode from '../nodes/user.node';

@ArgsType()
export class GetUserArgs {
  @Field(() => String)
  public id!: string;
}

@Resolver()
export default class UserQuery {
  public constructor(private readonly em: EntityManager) {}

  @Query(() => UserNode, { name: 'getUser', nullable: true })
  public async getUser(@Args() { id }: GetUserArgs): Promise<UserNode | null> {
    const user = await this.em.findOne(UserEntity, id);
    if (!user) {
      return null;
    }
    return new UserNode(user.id);
  }
}
