
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="header-minimal">
            <div className="header-container">
                {/* Solo el logo, limpio */}
                <div className="brand-wrapper">
                    <img src={logo} alt="Erizo Club" className="mini-logo" />
                    <span className="brand-text">Erizo Club</span>
                </div>

                {/* Un solo enlace sutil: "¿Quieres ver más?" */}
                <a href="https://tu-tienda-o-catalogo.com" className="shop-link">
                    Ir a la tienda ➔
                </a>
            </div>
        </header>
    );
}

export default Header;