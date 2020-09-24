import React, {memo} from 'react'
import { ApolloProvider, useMutation } from '@apollo/client'
import {CREATE_PLUGIN_STORAGE_MUTATION, client, PLUGIN_STORAGE_QUERY} from 'search'
import { v4 as uuidv4 } from 'uuid';

const PluginMutation = memo(props => {

  const Storage = () => {
    const [createStorage, { data }] = useMutation(CREATE_PLUGIN_STORAGE_MUTATION);
    /*
    const {data} = useQuery(PLUGIN_STORAGE_QUERY, {
      variables: { id: "4a4af-b137b-22acfef3"}
    })
    */

    if(data){
      console.log('data return', data)
    }

    return(
      <button onClick={() => {
        createStorage({variables: { input: {id: uuidv4(), pluginId: '869a172a-1026-458d-8c6b-89590d16b5d5', json: 'empty json' }}})
      }}>Create storage</button>
    ) 
  }
  return (
    <ApolloProvider client={client}>
      <Storage />
    </ApolloProvider>
  );
})

export default PluginMutation
