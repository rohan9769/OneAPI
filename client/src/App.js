import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider ,useQuery} from '@apollo/client'
import { DiplayData } from './DisplayData';
 
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql",
  })
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <DiplayData></DiplayData>
      </div>
    </ApolloProvider>
  );
}

export default App;
