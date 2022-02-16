import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LearntMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Learnt {
  readonly id: string;
  readonly url: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Learnt, LearntMetaData>);
  static copyOf(source: Learnt, mutator: (draft: MutableModel<Learnt, LearntMetaData>) => MutableModel<Learnt, LearntMetaData> | void): Learnt;
}