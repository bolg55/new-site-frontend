// ./apollo-client.js
import { API_URL } from "@/config/index"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
})

export default client
