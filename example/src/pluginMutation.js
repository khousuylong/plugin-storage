import React, {memo} from 'react'
import { ApolloProvider, useMutation } from '@apollo/client'
import {
  CREATE_PLUGIN_STORAGE_MUTATION, 
  client, 
  PLUGIN_STORAGE_QUERY,
  UPDATE_PLUGIN_STORAGE_MUTATION,
  DELETE_PLUGIN_STORAGE_MUTATION
} from 'search'
import { v4 as uuidv4 } from 'uuid';

const storageId = uuidv4();

const PluginMutation = memo(props => {
  const [state, setState] = React.useState({
    storage: null
  });

  const Storage = () => {
    const [createStorage, { data }] = useMutation(CREATE_PLUGIN_STORAGE_MUTATION);

    if(data){
      setState({storage: data.createPluginStorage})
    }

    return(
      <button onClick={() => {
        createStorage({variables: { input: {id: storageId, pluginId: '869a172a-1026-458d-8c6b-89590d16b5d5', json: JSON.stringify({foo: 'foo'}) }}})
      }}>Create storage</button>
    ) 
  }

  const UpdateStorage = () => {
    const [updateStorage, {data}] = useMutation(UPDATE_PLUGIN_STORAGE_MUTATION);
    if(data){
      setState({storage: data.updatePluginStorage})
    }

    const storage = state.storage;
    return(
      <div>
        <div style={{padding: 10}} >
          {Object.keys(storage).map(key =><div key={key}>{key}:{storage[key]}</div>)}
        </div>
        <button onClick={() => {
        updateStorage({variables: { id: storageId, json: JSON.stringify({foo: 'bar'}) }})
      }}>Update storage</button>
      </div>
    )
  }

  const DeleteStorage = () => {
    const [deleteStorage, {data}] = useMutation(DELETE_PLUGIN_STORAGE_MUTATION);
    if(data){
      setState({storage: null})
    }

    return(
      <div style={{paddingTop: 10}}>
        <button onClick={() => {
        deleteStorage({variables: { id: state.storage.id }})
      }}>Delete storage</button>
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
      <Storage />
      {
        state.storage ? 
        <React.Fragment>
          <UpdateStorage />
          <DeleteStorage />
        </React.Fragment>
        : null
      }
    </ApolloProvider>
  );
})

export default PluginMutation
