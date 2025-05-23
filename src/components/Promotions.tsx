
// src/components/Promotions.tsx
import React from 'react';
const promotions = [
  { id: 1, description: '10% de desconto em todos os serviços durante o mês de março!' },
  { id: 2, description: 'Leve um amigo e ganhe 15% de desconto no próximo agendamento!' },
];
const Promotions: React.FC = () => {
  return (
    <div>
      <h2>Promoções Sazonais</h2>
      <ul>
        {promotions.map((promo) => (
          <li key={promo.id}>{promo.description}</li>
        ))}
      </ul>
    </div>
  );
};
export default Promotions;