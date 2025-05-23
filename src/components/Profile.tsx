import React, { useState } from 'react';
const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Informações atualizadas:\nNome: ${name}\nEmail: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Perfil</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};
export default Profile;