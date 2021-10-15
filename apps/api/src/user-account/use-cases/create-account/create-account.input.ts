import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateAccountInput {
  @Field(() => ID)
  public userId!: string;

  @Field(() => String, { nullable: true })
  public givenName?: string;

  @Field(() => String, { nullable: true })
  public familyName?: string;

  @Field(() => String, { nullable: true })
  public handle?: string;
}
