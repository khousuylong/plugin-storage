# search

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/search.svg)](https://www.npmjs.com/package/search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save plugin-storage
```

## Usage

```jsx
import React, {memo} from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import {PLUGIN_SETTING_QUERY, client} from 'plugin-storage'

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
```

## License

MIT © [khousuylong](https://github.com/khousuylong)
