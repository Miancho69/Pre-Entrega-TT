import estilos from './Header.module.css';
import Navbar from './Navbar';

function Header() {
  return(
    <div>
      <h1 className={estilos.titulo}>Bienvenidos a mi tienda</h1>

      <Navbar />
    </div>
  );
}

export default Header
