import EmpleadoCard from "./EmpleadoCard";
import estilos from "./EmpleadoLista.module.css";

function EmpleadoLista({ empleados }) {
  return (
    <div className={estilos.tarjetas}>
      {empleados.map(empleado => 
        <EmpleadoCard key={empleado.id} empleado={empleado} />
      )}
    </div>
  )
}

export default EmpleadoLista;