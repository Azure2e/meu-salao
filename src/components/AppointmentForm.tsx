
// src/components/AppointmentForm.tsx
import React, { useState } from 'react';
import CouponForm from './CouponForm';
const AppointmentForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const handleApplyCoupon = (code: string) => {
    // Aqui você pode implementar a lógica para verificar o código do cupom
    if (code === 'DESCONTO10') {
      setDiscount(10); // Exemplo: 10% de desconto
      alert('Cupom aplicado com sucesso!');
    } else {
      alert('Código do cupom inválido.');
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Agendamento realizado para ${name} no dia ${date} para o serviço ${service} com ${discount}% de desconto.`);
  };
  return (
    <div>
      <h2>Agendar um Horário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Selecione um Serviço</option>
          <option value="Corte de Cabelo">Corte de Cabelo</option>
          <option value="Pintura de Cabelo">Pintura de Cabelo</option>
          <option value="Escova">Escova</option>
        </select>
        <CouponForm onApplyCoupon={handleApplyCoupon} />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};
export default AppointmentForm;