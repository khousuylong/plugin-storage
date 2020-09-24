import React from 'react';
import PluginQuery from './pluginQuery' 
import PluginMutation from './pluginMutation'

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <PluginQuery settingId="b67635cc-cb47-4aaf-b37b-42e470acfef3"/>
        <PluginMutation storageId="4a4af-b137b-22acfef3"/>
      </React.Fragment>
    ) 
  }
}
export default App;

