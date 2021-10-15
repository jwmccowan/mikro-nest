import { Migration } from '@mikro-orm/migrations';

export class Migration20211015090307 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_account" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "given_name" varchar(255) null, "family_name" varchar(255) null, "handle" varchar(255) null, "user_id" varchar(255) not null);');
    this.addSql('comment on table "user_account" is \'User editable details of their account.\';');
    this.addSql('comment on column "user_account"."id" is \'Primary uuid identifier of the resource.\';');
    this.addSql('comment on column "user_account"."given_name" is \'The first or given name of the user.\';');
    this.addSql('comment on column "user_account"."family_name" is \'The last or family name of the user.\';');
    this.addSql('comment on column "user_account"."handle" is \'The chosen hadnle of the user\';');
    this.addSql('alter table "user_account" add constraint "user_account_pkey" primary key ("id");');
    this.addSql('alter table "user_account" add constraint "user_account_user_id_unique" unique ("user_id");');

    this.addSql('alter table "user_account" add constraint "user_account_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

}
