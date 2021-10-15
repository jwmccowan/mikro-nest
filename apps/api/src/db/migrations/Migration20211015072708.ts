import { Migration } from '@mikro-orm/migrations';

export class Migration20211015072708 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" varchar(255) not null);',
    );
    this.addSql('comment on table "user" is \'A user of the app.  Identified by an email.\';');
    this.addSql('comment on column "user"."id" is \'Primary uuid identifier of the resource.\';');
    this.addSql('comment on column "user"."email" is \'The email that identifies the user.\';');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
    this.addSql('create index "user_email_index" on "user" ("email");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }
}
