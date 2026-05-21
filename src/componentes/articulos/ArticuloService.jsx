import { useState, useEffect } from "react";
import ArticuloLista from "./ArticuloLista";


function ArticuloService() {
  const [articulos, setArticulos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => 
    {
        fetch("/datos/DBArticulos.json")
        .then((respuesta) => {
            if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de los artículos");
            return respuesta.json();
        })
        .then(datos => setArticulos(datos))
        .catch(error => setError(error.message))
        .finally(() => setCargando(false))
    }, 
        []);

  if (cargando) return <p>Cargando artículos, por favor espere...</p>;
  if (error) return <p>Error: {error}</p>;

  return <ArticuloLista articulos={articulos} />;
};

export default ArticuloService;
