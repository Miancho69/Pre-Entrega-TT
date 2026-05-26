import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import estilos from './ArticuloDetalle.module.css';


function ArticuloDetalle() {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [favorito, setFavorito] = useState(false);
  const [cantidad, setCantidad] = useState(0);


  useEffect(() => {
      fetch("/datos/DBArticulos.json")
      .then((respuesta) => {
          if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de los artículos");

          return respuesta.json();
      })
      .then(datos => {
        const articuloEncontrado = datos.find(art => art.id === parseInt(id));
        setArticulo(articuloEncontrado);
      })
      .catch(error => setError(error.message))
      .finally(() => setCargando(false))
  }, [id]);


  if (cargando) return <h2>Cargando detalle del producto...</h2>;
  if (!articulo) return <h2>{error}</h2>;
  

  const toggleFavorito = () => setFavorito(!favorito);
      
  const agregar = () => {
    if (cantidad < articulo.stock) 
      setCantidad(cantidad + 1)
  };

  const restar = () => {
    if(cantidad > 0) 
      setCantidad(cantidad - 1)
  }

  
  return (
    <div className={estilos.contenedor}>
      <div>
        <img src={articulo.imagen} alt={articulo.nombre} />
        <h2>{articulo.nombre}</h2>
        <h3>{articulo.descripcion}</h3>
        <h3>Precio: {articulo.precio}ARS</h3>
      </div>

      <div>
        <span
          onClick={toggleFavorito} 
          className={estilos.corazon}
          style={{ '--color-corazon': favorito ? '#ff003c' : '#ccc' }}
        >
          {favorito ? '♥' : '♡'}
        </span>
      </div>
      
      <div className={estilos.botonera}>
        <button onClick={agregar}> + </button>
        <p>{cantidad}</p>
        <button onClick={restar}> - </button>
      </div>
    </div>
  );
}

export default ArticuloDetalle;