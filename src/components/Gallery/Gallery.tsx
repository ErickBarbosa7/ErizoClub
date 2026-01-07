import React from 'react';
import './Gallery.css';

// Importa aquí algunas fotos de ejemplo o usa URLs
// import img1 from '../../assets/ropa1.jpg'

function Gallery() {
    // Datos de ejemplo (luego vendrán de una base de datos o props)
    const items = [
        { id: 1, title: 'Chamarra Vintage', price: '$250', img: 'https://images.unsplash.com/photo-1551488852-080175b9277f?auto=format&fit=crop&w=500&q=60' },
        { id: 2, title: 'Jeans 90s', price: '$180', img: 'https://images.unsplash.com/photo-1542272617-08f08315c058?auto=format&fit=crop&w=500&q=60' },
        { id: 3, title: 'Camisa Floral', price: '$120', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=60' },
        { id: 4, title: 'Suéter Tejido', price: '$300', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=60' },
    ];

    return (
        <section className="gallery-section" id="catalogo">
            <h2 className="section-title">Recién Llegados 🦔</h2>
            <div className="gallery-grid">
                {items.map((item) => (
                    <div key={item.id} className="gallery-card">
                        <div className="image-container">
                            <img src={item.img} alt={item.title} />
                            <span className="price-tag">{item.price}</span>
                        </div>
                        <div className="card-info">
                            <h3>{item.title}</h3>
                            <button className="btn-buy">Ver detalles</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;