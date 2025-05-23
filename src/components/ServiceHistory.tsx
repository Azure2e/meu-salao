
import React, { useState } from 'react';
const ServiceHistory: React.FC = () => {
  const [history, setHistory] = useState([
    { id: 1, service: 'Corte de Cabelo', date: '01/01/2022' },
    { id: 2, service: 'Pintura de Cabelo', date: '15/02/2022' },
  ]);
  const clearHistory = () => {
    if (window.confirm("Você tem certeza que deseja limpar o histórico de serviços?")) {
      setHistory([]); // Limpa o histórico
    }
  };
  return (
    <div className="service-history">
      <h2>Histórico de Serviços</h2>
      {history.length > 0 ? (
        <>
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                {item.service} - {item.date}
              </li>
            ))}
          </ul>
          <button onClick={clearHistory}>Limpar Histórico</button>
        </>
      ) : (
        <p>O histórico de serviços está vazio.</p>
      )}
    </div>
  );
};
export default ServiceHistory;