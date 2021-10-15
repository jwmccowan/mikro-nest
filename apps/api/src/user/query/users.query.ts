import { EntityManager } from '@mikro-orm/core';
import { ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import UserEntity from '../user.entity';
import UserNode from '../nodes/user.node';
import UserConnection from '../nodes/user.connection.node';
import { connectionFromArray } from 'graphql-relay';

@ArgsType()
export class GetUserArgs {
  @Field(() => String)
  public id!: string;
}

@Resolver()
export default class UsersQuery {
  public constructor(private readonly em: EntityManager) {}

  @Query(() => UserConnection, { name: 'getUsers' })
  public async getUsers(): Promise<UserConnection> {
    const users = await this.em.find(UserEntity, {});
    return connectionFromArray(
      users.map(({ id }) => new UserNode(id)),
      {},
    );
  }
}
