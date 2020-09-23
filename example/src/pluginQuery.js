import React, {memo} from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import {PLUGIN_SETTING_QUERY} from 'search'

const PluginQuery = memo(props => {

  const LoadSetting = () => {
    const {data} = useQuery(PLUGIN_SETTING_QUERY, {
      variables: { id: props.settingId}
    })

    if(data) console.log('go the data', data)

    return(
      <div style={{padding: 10}} >
          Measure distances and areas
      </div>
    )
  }

  return (
    <ApolloProvider client={props.client}>
      <LoadSetting />  
    </ApolloProvider>
  );
})

export default PluginQuery
