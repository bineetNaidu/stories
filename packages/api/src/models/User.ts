import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import {
  prop as Property,
  getModelForClass,
  // post
} from '@typegoose/typegoose';
// import { StoryModel } from './Story';

// @post<User>('findOneAndDelete', async (user) => {
//   if (user) {
//     await StoryModel.deleteMany({
//       _id: {
//         $in: user.stories as any,
//       },
//     });
//   }
// })
@ObjectType()
export class User {
  @Field(() => String)
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true, unique: true })
  email: string;

  @Field()
  @Property()
  avatar: string;

  @Field({ nullable: true })
  @Property()
  bio?: string;

  @Field()
  @Property({ required: true, unique: true, trim: true })
  username!: string;

  @Property({ required: true, unique: true })
  googleId!: string;

  @Property({ default: 5 })
  storyLimit?: number;
}

export const UserModel = getModelForClass(User);
