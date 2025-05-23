
import React, { useState } from 'react';
const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Sugestão enviada: ${feedback}`);
    setFeedback('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário de Sugestões</h2>
      <textarea
        placeholder="Deixe sua sugestão..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Enviar Sugestão</button>
    </form>
  );
};
export default FeedbackForm;