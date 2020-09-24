import gql from 'graphql-tag';

const CREATE_PLUGIN_STORAGE_MUTATION = gql`
  mutation($input: PluginStorageInput){
    createPluginStorage(input: $input){
      id
      pluginId
      json
    }
  }
`
const UPDATE_PLUGIN_STORAGE_MUTATION = gql`
  mutation($id: ID!, $json: String){
    updatePluginStorage(id: $id, json: $json){
      id
      pluginId
      json
    }
  }
`
const DELETE_PLUGIN_STORAGE_MUTATION = gql`
  mutation($id: ID!){
    deletePluginStorage(id: $id){
      id
    }
  }
`;

const PLUGIN_STORAGE_QUERY = gql`
  query PluginStorageQuery($id: ID!) {
    pluginStorage(id: $id) {
      id
      pluginId
      json
    }
  }
`

const PLUGIN_SETTING_QUERY = gql`
  query PluginSettingQuery($id: ID!) {
    pluginSetting(id: $id) {
      id
      pluginId
      setting
    }
  }
`

const UPDATE_PLUGIN_SETTING_MUTATION = gql`
  mutation($id: ID!, $setting: String){
    updatePluginSetting(id: $id, setting: $setting){
      id
      pluginId
      setting
    }
  }
`

export {
  UPDATE_PLUGIN_SETTING_MUTATION, 
  PLUGIN_SETTING_QUERY, 
  PLUGIN_STORAGE_QUERY, 
  CREATE_PLUGIN_STORAGE_MUTATION, 
  UPDATE_PLUGIN_STORAGE_MUTATION,
  DELETE_PLUGIN_STORAGE_MUTATION
}
