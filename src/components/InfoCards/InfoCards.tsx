
import './InfoCards.css';

function InfoCards() {
  return (
    <section className="achievements-section">
      <h3 className="section-title">✨ Tu impacto en el Club</h3>
      
      <div className="cards-container">
        
        {/* Tarjeta 1: El Eco-Friendly */}
        <div className="card eco">
          <div className="card-icon">🌱</div>
          <h4>Planeta Feliz</h4>
          <p>Al rescatar esta prenda, ahorraste litros de agua y evitaste desperdicio textil.</p>
        </div>

        {/* Tarjeta 2: La Exclusividad */}
        <div className="card style">
          <div className="card-icon">⚡</div>
          <h4>100% Auténtico</h4>
          <p>Llevas una pieza única con historia. Nadie más tendrá tu mismo estilo hoy.</p>
        </div>

        {/* Tarjeta 3: El Regalo (Venta futura) */}
        <div className="card gift">
          <div className="card-icon">🎟️</div>
          <h4>Tu Recompensa</h4>
          <p>Usa el código <strong>ERIZO10</strong> en tu próxima compra para un 10% OFF.</p>
        </div>

      </div>
    </section>
  );
}

export default InfoCards;