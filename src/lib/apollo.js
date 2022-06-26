import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u24hvr0gfg01uncu5m861l/master',
  cache: new InMemoryCache()
})