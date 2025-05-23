import React from 'react';
const images = [
  { id: 1, src: 'https://via.placeholder.com/300x200?text=Corte+de+Cabelo+1', alt: 'Corte de Cabelo 1' },
  { id: 2, src: 'https://via.placeholder.com/300x200?text=Corte+de+Cabelo+2', alt: 'Corte de Cabelo 2' },
  { id: 3, src: 'https://via.placeholder.com/300x200?text=Corte+de+Cabelo+3', alt: 'Corte de Cabelo 3' },
];
const ImageGallery: React.FC = () => {
  return (
    <div className="image-gallery">
      <h2>Galeria de Imagens</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;