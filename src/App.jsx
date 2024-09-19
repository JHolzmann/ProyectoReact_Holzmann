import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from "./layout/BaseLayout"
import Home from './pages/Home/home';
import Store from './pages/Tienda/tienda';
import Detail from './pages/Detalle/detail';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/tienda' element={<Store />}/>
          <Route exact path='/tienda/categoria/:id' element={<Store />}/>
          <Route exact path='/detalle/:id' element={<Detail />}/>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App