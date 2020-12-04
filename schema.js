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
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById: Speaker
  }

  type Speaker {
    id: ID!
    bia: String
    name: String
    sessions: [Session]
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
  }
`
