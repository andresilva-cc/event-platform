import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o61vre0ok401xr62qs6014/master',
  cache: new InMemoryCache()
})
