/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      complted
      createdAt
      updatedAt
    }
  }
`;
export const createCofcEvent = /* GraphQL */ `
  mutation CreateCofcEvent(
    $input: CreateCofcEventInput!
    $condition: ModelCofcEventConditionInput
  ) {
    createCofcEvent(input: $input, condition: $condition) {
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
export const updateCofcEvent = /* GraphQL */ `
  mutation UpdateCofcEvent(
    $input: UpdateCofcEventInput!
    $condition: ModelCofcEventConditionInput
  ) {
    updateCofcEvent(input: $input, condition: $condition) {
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
export const deleteCofcEvent = /* GraphQL */ `
  mutation DeleteCofcEvent(
    $input: DeleteCofcEventInput!
    $condition: ModelCofcEventConditionInput
  ) {
    deleteCofcEvent(input: $input, condition: $condition) {
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
export const createPurchasedSeat = /* GraphQL */ `
  mutation CreatePurchasedSeat(
    $input: CreatePurchasedSeatInput!
    $condition: ModelPurchasedSeatConditionInput
  ) {
    createPurchasedSeat(input: $input, condition: $condition) {
      seatID
      eventID
      id
      createdAt
      updatedAt
    }
  }
`;
export const updatePurchasedSeat = /* GraphQL */ `
  mutation UpdatePurchasedSeat(
    $input: UpdatePurchasedSeatInput!
    $condition: ModelPurchasedSeatConditionInput
  ) {
    updatePurchasedSeat(input: $input, condition: $condition) {
      seatID
      eventID
      id
      createdAt
      updatedAt
    }
  }
`;
export const deletePurchasedSeat = /* GraphQL */ `
  mutation DeletePurchasedSeat(
    $input: DeletePurchasedSeatInput!
    $condition: ModelPurchasedSeatConditionInput
  ) {
    deletePurchasedSeat(input: $input, condition: $condition) {
      seatID
      eventID
      id
      createdAt
      updatedAt
    }
  }
`;
