import React, {memo} from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import {PLUGIN_SETTING_QUERY, client, PLUGIN_STORAGE_QUERY} from 'search'

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

  const LoadStorage = () => {
    const {data} = useQuery(PLUGIN_STORAGE_QUERY, {
      variables: { id: "4a4af-b137b-22acfef3"}
    })

    if(data){
      const setting = data.pluginStorage;
      return( 
        <div style={{padding: 10}} >
          {Object.keys(setting).map(key =><div key={key}>{key}:{setting[key]}</div>)}
        </div>
      )
    }
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <LoadSetting />  
      <LoadStorage />
    </ApolloProvider>
  );
})

export default PluginQuery
