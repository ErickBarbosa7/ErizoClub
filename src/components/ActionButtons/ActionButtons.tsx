import './ActionButtons.css';

function ActionButtons() {
  return (
    <section className="vibe-section">
      <div className="section-header">
        <span className="line"></span>
        <h3 className="section-title">Extras del Club</h3>
        <span className="line"></span>
      </div>

      <div className="buttons-container">
        
        {/* 1. Botón Spotify - Identidad de Marca */}
        {/* Crea una playlist en Spotify que se llame 'Erizo Vibes' y pon el link aquí */}
        <a 
          href="https://open.spotify.com/playlist/..." 
          target="_blank" 
          rel="noopener noreferrer"
          className="vibe-card spotify"
        >
          <div className="icon">🎵</div>
          <div className="info">
            <span className="title">Mood Erizo</span>
            <span className="subtitle">Escucha nuestra Playlist mientras te pruebas la ropa</span>
          </div>
        </a>

        {/* 2. Botón Cuidados - Valor Agregado */}
        {/* Link a una historia destacada de IG llamada 'Cuidados' */}
        <a 
          href="https://instagram.com/stories/highlights/..." 
          target="_blank" 
          rel="noopener noreferrer"
          className="vibe-card care"
        >
          <div className="icon">🧼</div>
          <div className="info">
            <span className="title">Cuida tu Prenda</span>
            <span className="subtitle">Guía rápida de lavado para ropa vintage</span>
          </div>
        </a>

        {/* 3. Botón Personal Shopper (WhatsApp) */}
        <a 
          href="https://wa.me/521XXXXXXXX" 
          target="_blank" 
          rel="noopener noreferrer"
          className="vibe-card chat"
        >
          <div className="icon">👀</div>
          <div className="info">
            <span className="title">¿Buscas algo más?</span>
            <span className="subtitle">Avísame qué necesitas y te lo consigo</span>
          </div>
        </a>

      </div>
    </section>
  );
}

export default ActionButtons;