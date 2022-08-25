import './App.css';
import CartPage from './Pages/CartPage';
import PaymentPage from './Pages/PaymentPage';

import MainRoutes from './Components/MainRoutes';
import Routing from './Components/Routing';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <CartPage/>
      {/* <PaymentPage/> */}

      <ChakraProvider>
    <MainRoutes/>
    <Routing/>
    </ChakraProvider>
    </div>
  );
}

export default App;
