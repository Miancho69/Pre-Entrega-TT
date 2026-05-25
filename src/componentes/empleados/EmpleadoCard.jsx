import estilos from "./EmpleadoCard.module.css";

function EmpleadoCard({ empleado }) {
  return (
    <div className={estilos.card} >
        <img src={empleado.imagen} className={estilos.imagen} alt={empleado.nombre} />

        <div className={estilos.cardbody}>
            <h3 className={estilos.cardtitle}>{empleado.nombre}</h3>
            <p className={estilos.cardtext}>Puesto: {empleado.puesto}</p>
        </div>
    </div>
  )
}

export default EmpleadoCard;
