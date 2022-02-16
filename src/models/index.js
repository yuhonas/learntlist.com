// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Learnt } = initSchema(schema);

export {
  Learnt
};