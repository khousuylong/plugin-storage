import React, {memo} from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import {PLUGIN_SETTING_QUERY, client} from 'search'

const PluginQuery = memo(props => {

  const LoadSetting = () => {
    const {data} = useQuery(PLUGIN_SETTING_QUERY, {
      variables: { id: props.settingId}
    })

    if(data){
      const setting = data.pluginSetting;
      return( 
        <div style={{padding: 10}} >
          {Object.keys(setting).map(key =><div>{key}:{setting[key]}</div>)}
        </div>
      )
    }
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <LoadSetting />  
    </ApolloProvider>
  );
})

export default PluginQuery
