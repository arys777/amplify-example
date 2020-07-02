/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        level
        product
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
