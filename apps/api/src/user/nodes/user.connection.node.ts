import { ObjectType } from '@nestjs/graphql';
import BaseConnection from '../../common/base-connection';
import UserNode from './user.node';

@ObjectType()
export default class UserConnection extends BaseConnection<UserNode>(UserNode) {}
