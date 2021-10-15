import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class UserAccountNode {
  @Field(() => ID, { nullable: false })
  public id: string;

  public constructor(id: string) {
    this.id = id;
  }
}
