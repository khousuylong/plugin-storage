import {InMemoryCache,makeVar} from '@apollo/client'

export const openPluginStorage = makeVar(false)
export const cache = new InMemoryCache({
  typePolicies: {
    PluginStorage: {
      fields: {
        open: {
          read() {
            return openPluginStorage()
          }
        }
      }
    }
  }
})
