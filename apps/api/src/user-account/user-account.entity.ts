import { Entity, OneToOne, Property } from '@mikro-orm/core';
import UserEntity from '../user/user.entity';
import BaseEntity from '../common/base-entity';

interface UserAccountFields {
  givenName?: string;
  familyName?: string;
  handle?: string;
}

@Entity({ tableName: 'user_account', comment: 'User editable details of their account.' })
export default class UserAccountEntity extends BaseEntity {
  @Property({ comment: 'The first or given name of the user.', nullable: true })
  public givenName?: string;

  @Property({ comment: 'The last or family name of the user.', nullable: true })
  public familyName?: string;

  @Property({ comment: 'The chosen hadnle of the user', nullable: true })
  public handle?: string;

  @OneToOne(() => UserEntity)
  public user: UserEntity;

  public constructor(user: UserEntity, fields: UserAccountFields) {
    super();
    this.user = user;
    this.familyName = fields.familyName;
    this.givenName = fields.givenName;
    this.handle = fields.handle;
  }

  public static create(user: UserEntity, fields: UserAccountFields): UserAccountEntity {
    return new UserAccountEntity(user, fields);
  }
}
