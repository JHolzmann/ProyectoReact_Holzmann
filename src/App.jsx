import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartContextProvider } from "./context/cartContext";
import BaseLayout from "./layout/BaseLayout"
import Home from './pages/Home/home';
import Store from './pages/Tienda/tienda';
import Detail from './pages/Detalle/detail';
import Error404 from './pages/error404/error';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home condition={false}/>}/>
            <Route path="/tienda" element={<Store />}/>
            <Route path="/tienda/:categoria" element={<Store />}/>
            <Route path="/detalle/:id" element={<Detail />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App