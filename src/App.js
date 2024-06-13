import React from 'react';
import Logincomponent from './Logincomponent';
import Home from './Home';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<Home/>} path='/' exact/>
        </Route>
        <Route element={<Logincomponent />} path='/login' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;