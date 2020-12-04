const _ = require('lodash')

module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args)
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id)
    },
    speakers: (parent, args, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakers(args)
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakerById(id)
    },
  },

  Session: {
    speakers: async (session, args, { dataSources }, info) => {
      const speakers = await dataSources.speakerAPI.getSpeakers()
      return speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0
      })
    },
  },
}
