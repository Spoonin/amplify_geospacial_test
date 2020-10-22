// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
