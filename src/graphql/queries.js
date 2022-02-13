/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLearnt = /* GraphQL */ `
  query GetLearnt($id: ID!) {
    getLearnt(id: $id) {
      id
      _deleted
    }
  }
`;
export const listLearnts = /* GraphQL */ `
  query ListLearnts(
    $filter: ModelLearntFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearnts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLearnts = /* GraphQL */ `
  query SyncLearnts(
    $filter: ModelLearntFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLearnts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _deleted
      }
      nextToken
      startedAt
    }
  }
`;
