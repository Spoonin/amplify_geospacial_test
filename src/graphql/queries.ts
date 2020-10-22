// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const nearbyActivities = /* GraphQL */ `
  query NearbyActivities(
    $location: LocationInput!
    $m: Int
    $limit: Int
    $nextToken: String
  ) {
    nearbyActivities(
      location: $location
      m: $m
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        description
        createdByID
        createdBy {
          id
          nick
          email
          avatarUrl
        }
        location {
          lat
          lon
        }
        status
        plannedStartAt
        plannedEndAt
        cancellationReason
        finishedAt
      }
      total
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nick
        email
        avatarUrl
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      type
      title
      description
      createdByID
      createdBy {
        id
        nick
        email
        avatarUrl
      }
      location {
        lat
        lon
      }
      status
      plannedStartAt
      plannedEndAt
      cancellationReason
      finishedAt
    }
  }
`;
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        description
        createdByID
        createdBy {
          id
          nick
          email
          avatarUrl
        }
        location {
          lat
          lon
        }
        status
        plannedStartAt
        plannedEndAt
        cancellationReason
        finishedAt
      }
      total
      nextToken
    }
  }
`;
export const searchActivitys = /* GraphQL */ `
  query SearchActivitys(
    $filter: SearchableActivityFilterInput
    $sort: SearchableActivitySortInput
    $limit: Int
    $nextToken: String
  ) {
    searchActivitys(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        description
        createdByID
        createdBy {
          id
          nick
          email
          avatarUrl
        }
        location {
          lat
          lon
        }
        status
        plannedStartAt
        plannedEndAt
        cancellationReason
        finishedAt
      }
      nextToken
      total
    }
  }
`;
