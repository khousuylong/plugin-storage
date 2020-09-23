import { ApolloClient, InMemoryCache } from '@apollo/client'
import { makeExecutableSchema } from 'graphql-tools'
import { SchemaLink } from '@apollo/client/link/schema'
import {typeDefs} from './schema/schema'
import {resolvers} from './schema/resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const Client = {}
export default Client;
