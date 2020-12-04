module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args)
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionAPI.getSessionById(id)
    } catch (e) {
      return {
        code: 'Error',
        message: 'An error occurred',
        token: '2834783274jdf',
      }
    }
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers(args)
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id)
  },
}
