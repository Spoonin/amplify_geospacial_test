// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      nick
      email
      avatarUrl
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
