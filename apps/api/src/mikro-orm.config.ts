import * as path from 'path';

export default {
  entities: [path.join(__dirname, '**/*.entity.js')],
  entitiesTs: [path.join(__dirname, '**/*.entity.ts')],
  type: 'postgresql',
  dbName: 'postgres',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  migrations: {
    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: path.join(__dirname, 'db/migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
};
