/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
