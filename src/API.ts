/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  nick?: string | null,
  email: string,
  avatarUrl?: string | null,
};

export type ModelUserConditionInput = {
  nick?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  nick?: string | null,
  email?: string | null,
  avatarUrl?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateActivityInput = {
  id?: string | null,
  type: ActivityType,
  title: string,
  description?: string | null,
  createdByID: string,
  location?: LocationInput | null,
  status: ActivityStatus,
  plannedStartAt?: string | null,
  plannedEndAt?: string | null,
  cancellationReason?: string | null,
  finishedAt?: string | null,
};

export enum ActivityType {
  walk = "walk",
  show = "show",
  teaparty = "teaparty",
  police = "police",
}


export type LocationInput = {
  lat: number,
  lon: number,
};

export enum ActivityStatus {
  planned = "planned",
  active = "active",
  finished = "finished",
  cancelled = "cancelled",
}


export type ModelActivityConditionInput = {
  type?: ModelActivityTypeInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdByID?: ModelIDInput | null,
  status?: ModelActivityStatusInput | null,
  plannedStartAt?: ModelStringInput | null,
  plannedEndAt?: ModelStringInput | null,
  cancellationReason?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelActivityStatusInput = {
  eq?: ActivityStatus | null,
  ne?: ActivityStatus | null,
};

export type UpdateActivityInput = {
  id: string,
  type?: ActivityType | null,
  title?: string | null,
  description?: string | null,
  createdByID?: string | null,
  location?: LocationInput | null,
  status?: ActivityStatus | null,
  plannedStartAt?: string | null,
  plannedEndAt?: string | null,
  cancellationReason?: string | null,
  finishedAt?: string | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  nick?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelActivityTypeInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdByID?: ModelIDInput | null,
  status?: ModelActivityStatusInput | null,
  plannedStartAt?: ModelStringInput | null,
  plannedEndAt?: ModelStringInput | null,
  cancellationReason?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type SearchableActivityFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  createdByID?: SearchableIDFilterInput | null,
  plannedStartAt?: SearchableStringFilterInput | null,
  plannedEndAt?: SearchableStringFilterInput | null,
  cancellationReason?: SearchableStringFilterInput | null,
  finishedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableActivityFilterInput | null > | null,
  or?: Array< SearchableActivityFilterInput | null > | null,
  not?: SearchableActivityFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableActivitySortInput = {
  field?: SearchableActivitySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableActivitySortableFields {
  id = "id",
  title = "title",
  description = "description",
  createdByID = "createdByID",
  plannedStartAt = "plannedStartAt",
  plannedEndAt = "plannedEndAt",
  cancellationReason = "cancellationReason",
  finishedAt = "finishedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type NearbyActivitiesQueryVariables = {
  location: LocationInput,
  m?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NearbyActivitiesQuery = {
  nearbyActivities:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description: string | null,
      createdByID: string,
      createdBy:  {
        __typename: "User",
        id: string,
        nick: string | null,
        email: string,
        avatarUrl: string | null,
      },
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      status: ActivityStatus,
      plannedStartAt: string | null,
      plannedEndAt: string | null,
      cancellationReason: string | null,
      finishedAt: string | null,
    } | null > | null,
    total: number | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description: string | null,
      createdByID: string,
      createdBy:  {
        __typename: "User",
        id: string,
        nick: string | null,
        email: string,
        avatarUrl: string | null,
      },
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      status: ActivityStatus,
      plannedStartAt: string | null,
      plannedEndAt: string | null,
      cancellationReason: string | null,
      finishedAt: string | null,
    } | null > | null,
    total: number | null,
    nextToken: string | null,
  } | null,
};

export type SearchActivitysQueryVariables = {
  filter?: SearchableActivityFilterInput | null,
  sort?: SearchableActivitySortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchActivitysQuery = {
  searchActivitys:  {
    __typename: "SearchableActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description: string | null,
      createdByID: string,
      createdBy:  {
        __typename: "User",
        id: string,
        nick: string | null,
        email: string,
        avatarUrl: string | null,
      },
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      status: ActivityStatus,
      plannedStartAt: string | null,
      plannedEndAt: string | null,
      cancellationReason: string | null,
      finishedAt: string | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    nick: string | null,
    email: string,
    avatarUrl: string | null,
  } | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description: string | null,
    createdByID: string,
    createdBy:  {
      __typename: "User",
      id: string,
      nick: string | null,
      email: string,
      avatarUrl: string | null,
    },
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    status: ActivityStatus,
    plannedStartAt: string | null,
    plannedEndAt: string | null,
    cancellationReason: string | null,
    finishedAt: string | null,
  } | null,
};
