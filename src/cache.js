import {InMemoryCache,makeVar} from '@apollo/client'
export const cache = new InMemoryCache({
  typePolicies: {
    PluginStorage: {
      fields: {
        open: {
          read(value = false) {
            return value
          }
        }
      }
    }
  }
})
