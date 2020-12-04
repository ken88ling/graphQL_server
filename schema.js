const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): SessionOrError
    speakers: [Speaker]
    speakerById: Speaker
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  union SessionOrError = Session | Error

  input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
  }

  type Error {
    code: String
    message: String
    token: String
  }

  type Session {
    id: ID!
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(reason: "Too many sessions do not fit into a single track")
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }

  type Speaker {
    id: ID!
    bia: String
    name: String
    sessions: [Session]
  }
`
