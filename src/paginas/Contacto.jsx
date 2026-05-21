import estilos from './Contacto.module.css';


function Contacto() {
    return (
        <div className={estilos.contacto}>
            <h2>Formulario de contacto</h2>

            <form className={estilos.contactoForm}>
                <div className={estilos.formGroup}>
                    <label>
                        Nombre:

                        <input type="text" name="name" placeholder="Ingrese el nombre" />
                    </label>
                </div>

                <div className={estilos.formGroup}>
                    <label>
                        Apellido:

                        <input type="text" name="apellido" placeholder="Ingrese el apellido" />
                    </label>
                </div>

                <div className={estilos.formGroup}>
                    <label>
                        Email:
                        
                        <input type="email" name="email" placeholder="Ingrese el email" />
                    </label>
                </div>

                <div className={estilos.formGroup}>
                    <label>
                        Mensaje:
                        <textarea name="message" placeholder="Ingrese su mensaje"></textarea>
                    </label>
                </div>

                <div>
                    <button type="submit">Enviar</button>
                </div>

            </form>
        </div>
    );
}

export default Contacto;
