import React from 'react';
import LoginCompRaul from './LoginCompRaul';
import HrView from './HrView';
import Home from './Home';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<HrView/>}  path='/hr' exact/>
        </Route>
        <Route element={<LoginCompRaul />} path='/login' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;