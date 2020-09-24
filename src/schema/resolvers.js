import axios from 'axios';

const server = "http://localhost:3006";

const resolvers = {
  Query: {
      pluginSetting: async (root, args, context, info) => {
        const pluginSetting = (await axios.get(`${server}/pluginSettings/${args.id}`)).data;
        return pluginSetting;
      },
      pluginStorage: async (root, args, context, info) => {
        const storage = (await axios.get(`${server}/pluginStorages/${args.id}`)).data;
        return storage
      }
  },
  Mutation: {
    updatePluginSetting: async (root, args, context, info) => {
      const pluginSetting = (await axios.get(`${server}/pluginSettings/${args.id}`)).data;
      pluginSetting['setting'] = args.setting;
      return (await axios.put(`${server}/pluginSettings/${args.id}`, pluginSetting, { headers: {"Content-Type": "application/json"}})).data;
    },
    createPluginStorage: async (root, args, context, info) => {
      const response = await axios.post(`${server}/pluginStorages`, args.input, { headers: {"Content-Type": "application/json"}});
      return response.data;
    },
    updatePluginStorage: async (root, args, context, info) => {
      console.log('hay yeah', args)
      const pluginStorage = (await axios.get(`${server}/pluginStorages/${args.id}`)).data;
      pluginStorage['json'] = args.json;
      return (await axios.put(`${server}/pluginStorages/${args.id}`, pluginStorage, { headers: {"Content-Type": "application/json"}})).data;
    }
  }
};

export {resolvers};
