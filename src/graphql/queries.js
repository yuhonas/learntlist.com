/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLearnt = /* GraphQL */ `
  query GetLearnt($id: ID!) {
    getLearnt(id: $id) {
      id
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
