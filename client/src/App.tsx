import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { CreateUser } from './Components/CreateUser/CreateUser';
import { ListOfUsers } from './Components/ListOfUsers/ListOfUsers';

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
        <ListOfUsers />
      </ApolloProvider>
      </>
    )
}

export default App
