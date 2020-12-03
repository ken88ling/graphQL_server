const sessions = require('../data/sessions.json')
const { DataSource } = require('apollo-datasource')

class SessionApi extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    // return super.initialize(config)
  }

  getSessions() {
    return sessions
  }
}

module.exports = SessionApi
