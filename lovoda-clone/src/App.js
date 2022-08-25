import './App.css';
import MainRoutes from './Components/MainRoutes';
import Routing from './Components/Routing';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
    <MainRoutes/>
    <Routing/>
    </ChakraProvider>
    </div>
  );
}

export default App;
