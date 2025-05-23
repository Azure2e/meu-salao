
import React from 'react';
const Map: React.FC = () => {
  return (
    <div className="map">
      <h2>Localização do Salão</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.4194150846819!3d37.77492927975994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581c7f5f5f5f5%3A0x7e7e7e7e7e7e7e7e!2sSeu+Sal%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr"
        width="350"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;