import ArticuloCard from "./ArticuloCard";
import estilos from "./ArticuloLista.module.css";

function ArticuloLista({ articulos }) {
  return (
    <div className={estilos.tarjetas}>
      {articulos.map(articulo => 
        <ArticuloCard key={articulo.id} articulo={articulo} />
      )}
    </div>
  )
}

export default ArticuloLista;