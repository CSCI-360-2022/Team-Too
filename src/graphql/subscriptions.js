/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCofcEvent = /* GraphQL */ `
  subscription OnCreateCofcEvent(
    $filter: ModelSubscriptionCofcEventFilterInput
  ) {
    onCreateCofcEvent(filter: $filter) {
      eventID
      eventName
      eventDate
      eventCategory
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCofcEvent = /* GraphQL */ `
  subscription OnUpdateCofcEvent(
    $filter: ModelSubscriptionCofcEventFilterInput
  ) {
    onUpdateCofcEvent(filter: $filter) {
      eventID
      eventName
      eventDate
      eventCategory
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCofcEvent = /* GraphQL */ `
  subscription OnDeleteCofcEvent(
    $filter: ModelSubscriptionCofcEventFilterInput
  ) {
    onDeleteCofcEvent(filter: $filter) {
      eventID
      eventName
      eventDate
      eventCategory
      id
      createdAt
      updatedAt
    }
  }
`;
