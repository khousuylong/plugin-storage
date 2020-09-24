const typeDefs = `
  type PluginSetting{
    id: ID!
    pluginId: ID!
    setting: String
  }

  type PluginStorage{
    id: ID!
    pluginId: ID!
    json: String
  }

  input PluginStorageInput{
    id: ID!
    pluginId: ID!
    json: String
  }

  type Query{
    pluginSetting(id: ID!): PluginSetting
    pluginStorage(id: ID!): PluginStorage
  }

  type Mutation {
    updatePluginSetting(id: ID!, setting: String): PluginSetting
    createPluginStorage(input: PluginStorageInput): PluginStorage 
    updatePluginStorage(id: ID!, json: String): PluginStorage
    deletePluginStorage(id: ID!): PluginStorage
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export {typeDefs};
