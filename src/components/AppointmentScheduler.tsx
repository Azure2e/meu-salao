import React, { useState } from 'react';
const AppointmentScheduler: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Agendamento realizado para ${service} no dia ${date} às ${time}.`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar um Horário</h2>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <select value={service} onChange={(e) => setService(e.target.value)} required>
        <option value="">Selecione um Serviço</option>
        <option value="Corte de Cabelo">Corte de Cabelo</option>
        <option value="Pintura de Cabelo">Pintura de Cabelo</option>
        <option value="Escova">Escova</option>
      </select>
      <button type="submit">Agendar</button>
    </form>
  );
};
export default AppointmentScheduler;