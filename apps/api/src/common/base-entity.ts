import { PrimaryKey, Property } from '@mikro-orm/core';
import * as uuid from 'uuid';

export default abstract class BaseEntity {
  @PrimaryKey({
    name: 'id',
    comment: 'Primary uuid identifier of the resource.',
  })
  id: string = uuid.v4();

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();
}
