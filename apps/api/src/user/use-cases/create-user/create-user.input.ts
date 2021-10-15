import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateUserInput {
  @Field(() => String)
  public email!: string;
}
