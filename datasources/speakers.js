const { RESTDataSource } = require('apollo-datasource-rest')

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000/speakers'
  }

  async getSpeakerById(id) {
    return await this.get(`/${id}`)
  }

  async getSpeakers() {
    return await this.get('/')
  }
}

module.exports = SpeakerAPI
