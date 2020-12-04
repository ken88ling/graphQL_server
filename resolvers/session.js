const { ApolloError } = require('apollo-server')
const _ = require('lodash')

module.exports = {
  speakers: async (session, args, { dataSources }, info) => {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers()
      return speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0
      })
    } catch (e) {
      return new ApolloError('Unable to get speakers', 'SPEAKER_API_ERROR', {
        token: 'uniquetoken',
      })
    }
  },
}
