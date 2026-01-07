import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.png'; 

function Hero() {
    
    // Función inteligente para manejar el click
    const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Evita el comportamiento normal del link
        
        const username = "eriz.oclub";
        
        // Detectar si es Android o iPhone
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Intenta abrir la APP directamente
            window.location.href = `instagram://user?username=${username}`;
            setTimeout(() => {
                window.location.href = `https://instagram.com/${username}`;
            }, 500);
        } else {
            // Si es computadora, abrir web en pestaña nueva
            window.open(`https://instagram.com/${username}`, '_blank');
        }
    };

    return (
        <section className="hero-qr-section">
            <div className="hero-content">
                
                <div className="logo-wrapper">
                    <img src={logo} alt="Erizo Club" className="hero-logo" />
                </div>
                
                <h1 className="hero-title">
                    ¡Bienvenido <br/> <span className="highlight">al Club!</span> 🦔
                </h1>
                
                <p className="hero-text">
                    Gracias por darle una <strong>segunda vida</strong> a esta prenda.
                    Te ves increíble hoy.
                </p>

                <div className="cta-container">
                    {/* Usamos onClick en lugar de href directo */}
                    <a 
                        href={`https://instagram.com/eriz.oclub`} // Fallback visual
                        onClick={handleInstagramClick}
                        className="cta-instagram"
                    >
                        📸 Presúmelo en Instagram
                    </a>
                    <span className="cta-subtext">Y etiquétanos para repostearte</span>
                </div>

            </div>
            
            <div className="bg-blob"></div>
        </section>
    );
}

export default Hero;