import { Routes, Route } from 'react-router-dom';
import Principal from './componentes/compartidos/Principal';
import ArticuloService from './componentes/articulos/ArticuloService';
import ArticuloDetalle from './componentes/articulos/ArticuloDetalle';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <>
      <Routes>
          <Route element={<Principal />}>
            <Route path='/' />
            <Route path='/tienda' element={<ArticuloService />} />
            <Route path='/articulo-detalle/:id' element={<ArticuloDetalle />} />
            <Route path='/contacto' element={<Contacto />}/>
          </Route>
      </Routes>
    </>
  );
}

export default App
