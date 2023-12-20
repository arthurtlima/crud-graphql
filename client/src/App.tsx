import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'

function App() {

    const client = new ApolloClient({
      uri: 'http://localhost:3001/graphql',
      cache: new InMemoryCache()
    });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>React</h1>
        </div>
      </ApolloProvider>
    )
}

export default App
