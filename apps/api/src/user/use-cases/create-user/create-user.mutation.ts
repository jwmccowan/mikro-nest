import { EntityManager } from '@mikro-orm/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import UserNode from 'user/nodes/user.node';
import UserEntity from 'user/user.entity';
import CreateUserInput from './create-user.input';

@Resolver()
export default class CreateUserMutation {
  public constructor(private readonly em: EntityManager) {}

  @Mutation(() => UserNode, { nullable: true })
  public async createUser(@Args('input') { email }: CreateUserInput): Promise<UserNode | null> {
    console.log('eggs', 'hello');
    const user = UserEntity.create(email);
    console.log('eggs', user);
    await this.em.persistAndFlush(user);
    return user;
  }
}
