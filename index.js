const { ApolloServer, gql } = require('apollo-server')
const SessionsAPI = require('./datasources/sessions')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const dataSources = () => ({
  SessionAPI: new SessionsAPI(),
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`)
})
