/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      ems_id
      name
      api_key
      sessions {
        items {
          id
          ems_id
          title
          abstract
          category
          level
          product
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      ems_id
      name
      api_key
      sessions {
        items {
          id
          ems_id
          title
          abstract
          category
          level
          product
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      ems_id
      name
      api_key
      sessions {
        items {
          id
          ems_id
          title
          abstract
          category
          level
          product
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      ems_id
      title
      abstract
      category
      event {
        id
        ems_id
        name
        api_key
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      level
      product
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      ems_id
      title
      abstract
      category
      event {
        id
        ems_id
        name
        api_key
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      level
      product
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      ems_id
      title
      abstract
      category
      event {
        id
        ems_id
        name
        api_key
        sessions {
          nextToken
        }
        createdAt
        updatedAt
      }
      level
      product
      type
      createdAt
      updatedAt
    }
  }
`;
