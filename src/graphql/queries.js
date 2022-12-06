/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        complted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCofcEvent = /* GraphQL */ `
  query GetCofcEvent($id: ID!) {
    getCofcEvent(id: $id) {
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
export const listCofcEvents = /* GraphQL */ `
  query ListCofcEvents(
    $filter: ModelCofcEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCofcEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        eventID
        eventName
        eventDate
        eventCategory
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
