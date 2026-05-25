import { useState, useEffect } from "react";
import EmpleadoLista from "./EmpleadoLista";


function EmpleadoService() {
  const [empleados, setEmpleados] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => 
    {
        fetch("/datos/DBEmpleados.json")
        .then((respuesta) => {
            if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de los empleados");
            return respuesta.json();
        })
        .then(datos => setEmpleados(datos))
        .catch(error => setError(error.message))
        .finally(() => setCargando(false))
    }, 
        []);

  if (cargando) return <p>Cargando empleados, por favor espere...</p>;
  if (error) return <p>Error: {error}</p>;

  return <EmpleadoLista empleados={empleados} />;
};

export default EmpleadoService;
