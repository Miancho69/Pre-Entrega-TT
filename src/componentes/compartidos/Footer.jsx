import EmpleadoService from '../empleados/EmpleadoService';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div>
            <EmpleadoService />

            <br />

            <footer className={styles.footer}>
                <p>Copyright © 2026 Miancho's development. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Footer;
