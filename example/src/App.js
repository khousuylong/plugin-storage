import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { makeExecutableSchema } from 'graphql-tools'
import { SchemaLink } from '@apollo/client/link/schema'
import {typeDefs} from './schema/schema'
import {resolvers} from './schema/resolvers'
import PluginQuery from './pluginQuery' 


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <PluginQuery client={client} settingId="b67635cc-cb47-4aaf-b37b-42e470acfef3"/>
      </React.Fragment>
    ) 
  }
}
export default App;

