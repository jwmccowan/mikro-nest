import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import UserAccountModule from 'user-account/user-account.module';
import UserModule from 'user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      bodyParserConfig: false,
      sortSchema: true,
    }),
    MikroOrmModule.forRoot(),
    UserModule,
    UserAccountModule,
  ],
})
export class AppModule {}
