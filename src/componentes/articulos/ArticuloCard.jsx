import { Link } from 'react-router-dom';
import estilos from "./ArticuloCard.module.css";

function ArticuloCard({ articulo }) {
  return (
    <div className={estilos.card} >
        <img src={articulo.imagen} className={estilos.imagen} alt={articulo.nombre} />

        <div className={estilos.cardbody}>
            <h3 className={estilos.cardtitle}>{articulo.nombre}</h3>
            <p className={estilos.cardtext}>Precio: ${articulo.precio}</p>

            <Link to={`/articulo-detalle/${articulo.id}`} className={estilos.boton}>
                Ver detalles
            </Link>
        </div>
    </div>
  )
}

export default ArticuloCard;
