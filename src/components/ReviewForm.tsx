
// src/components/ReviewForm.tsx
import React, { useState } from 'react';
const ReviewForm: React.FC = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a avaliação para um servidor ou armazená-la localmente
    alert(`Avaliação enviada!\nNome: ${name}\nAvaliação: ${review}\nClassificação: ${rating} estrelas`);
    // Limpar os campos após o envio
    setName('');
    setReview('');
    setRating(1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Deixe sua Avaliação</h2>
      <input
        type="text"
        placeholder="Seu Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Sua Avaliação"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        <option value={1}>1 Estrela</option>
        <option value={2}>2 Estrelas</option>
        <option value={3}>3 Estrelas</option>
        <option value={4}>4 Estrelas</option>
        <option value={5}>5 Estrelas</option>
      </select>
      <button type="submit">Enviar Avaliação</button>
    </form>
  );
};
export default ReviewForm;