
import React from 'react';
interface Service {
  id: number;
  name: string;
  price: string;
}
const services: Service[] = [
  { id: 1, name: 'Corte de Cabelo', price: 'R$ 50,00' },
  { id: 2, name: 'Pintura de Cabelo', price: 'R$ 150,00' },
  { id: 3, name: 'Escova', price: 'R$ 70,00' },
];
const ServiceList: React.FC = () => {
  return (
    <div>
      <h2>Serviços Disponíveis</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - {service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceList;