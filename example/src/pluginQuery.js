import React, {memo} from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import {PLUGIN_SETTING_QUERY, client, PLUGIN_STORAGE_QUERY, PLUGIN_STORAGES_QUERY} from 'search'

const PluginQuery = memo(props => {

  const LoadSetting = () => {
    const {data} = useQuery(PLUGIN_SETTING_QUERY, {
      variables: { id: props.settingId}
    })

    if(data){
      const setting = data.pluginSetting;
      return( 
        <div style={{padding: 10}} >
          {Object.keys(setting).map(key =><div key={key}>{key}:{setting[key]}</div>)}
        </div>
      )
    }
    return null;
  }

  const RenderStorage = props => <div>{Object.keys(props.data).map(key =><div key={key}>{key}:{props.data[key]}</div>)}</div>

  const LoadStorage = () => {
    const {data} = useQuery(PLUGIN_STORAGE_QUERY, {
      variables: { id: "4a4af-b137b-22acfef3"}
    })

    if(data){
      const setting = data.pluginStorage;
      return( 
        <div style={{padding: 10}} >
          <RenderStorage data={setting} />
        </div>
      )
    }
    return null;
  }

  const LoadStorages = () => {
    const {data} = useQuery(PLUGIN_STORAGES_QUERY, {
      variables: { pluginId: "869a172a-1026-458d-8c6b-89590d16b5d5"}
    })

    if(data){
      return(
        <div>
          {
            data.pluginStorages.map(storage => <div style={{padding: 10}}><RenderStorage data={storage} /></div>)
          }
        </div>
      )
      console.log('hey hey this is data', data)
    }
    return null;
  }
  /*
          */
  return (
    <ApolloProvider client={client}>
      <h3>Load setting</h3>
      <LoadSetting />  
      <h3>Load storage</h3>
      <LoadStorage />
      <h3>Load storage by pluginId</h3> 
      <LoadStorages />
    </ApolloProvider>
  );
})

export default PluginQuery
