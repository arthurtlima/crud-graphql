import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { CreateUser } from './Components/CreateUser/CreateUser';

import './App.css'

function App() {

    const client = new ApolloClient({
      uri: 'http://localhost:3001/graphql',
      cache: new InMemoryCache()
    });



    return (
      <>
      <ApolloProvider client={client}>
        <CreateUser />
      </ApolloProvider>
      </>
    )
}

export default App
