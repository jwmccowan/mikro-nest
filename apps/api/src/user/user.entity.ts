import { Entity, Index, Property } from '@mikro-orm/core';
import BaseEntity from '../common/base-entity';

@Entity({
  comment: 'A user of the app.  Identified by an email.',
  tableName: 'user',
})
export default class UserEntity extends BaseEntity {
  @Property({
    name: 'email',
    nullable: false,
    comment: 'The email that identifies the user.',
    unique: true,
  })
  @Index({ name: 'user_email_index' })
  public email: string;

  public constructor(email: string) {
    super();
    this.email = email;
  }

  public static create(email: string): UserEntity {
    return new UserEntity(email);
  }
}
