import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class UserNode {
  @Field(() => ID)
  public id: string;

  public constructor(id: string) {
    this.id = id;
  }
}
