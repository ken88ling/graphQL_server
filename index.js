const { ApolloServer, ApolloError } = require('apollo-server')
const SessionAPI = require('./datasources/sessions')
const SpeakerAPI = require('./datasources/speakers')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
  debug: false,
  formatError: (error) => {
    if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
      return new ApolloError('We are having some trouble', 'Error', {
        token: 'uniqueToken',
      })
    }
    return error
  },
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`)
})
